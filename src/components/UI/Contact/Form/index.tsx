import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useTranslation from "next-translate/useTranslation";
import axios from "axios";
import toast from "react-hot-toast";

export const Form = () => {
  const { t } = useTranslation("common");
  const schema = yup.object().shape({
    name: yup.string().trim().required(t("required_field")),
    phone: yup.string().trim().required(t("required_field")),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const telegramBotToken = "7522604173:AAEyf5BX3oRQham7fWY6diI95gXEsaqPPkQ";
  const chatId = "-1002186349807";

  const sendMessageToTelegram = async (message: string) => {
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text: message,
        }
      );
      toast.success("Successfully sent!");
      if (response?.status === 200) reset();
    } catch (error) {
      toast.error("Something went wrong please try again");
      console.log("error", error);
    }
  };

  const onSubmit = (data: any) => {
    console.log("data", data);

    const message = `Ism: ${data.name} \nTel.raqam: ${data.phone} `;
    sendMessageToTelegram(message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="form-input"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Phone number"
          {...register("phone")}
          className="form-input"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <button className="submit-btn w-full">Book an appointment</button>
    </form>
  );
};

import { ProductUI } from "@/components/UI/Product";

export const ProductGrid = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-x-2 gap-y-5">
        <ProductUI
          classes="w-full"
          element={{
            image:
              "https://images.uzum.uz/cri05kc2gps3jqbgftrg/t_product_540_high.jpg#1726309013748",
          }}
        />
        <ProductUI
          classes="w-[100%]"
          element={{
            image:
              "https://images.uzum.uz/cri05kc2gps3jqbgftrg/t_product_540_high.jpg#1726309013748",
          }}
        />
        <ProductUI
          classes="w-[100%]"
          element={{
            image:
              "https://images.uzum.uz/cri05kc2gps3jqbgftrg/t_product_540_high.jpg#1726309013748",
          }}
        />
        <ProductUI
          classes="w-[100%]"
          element={{
            image:
              "https://images.uzum.uz/cri05kc2gps3jqbgftrg/t_product_540_high.jpg#1726309013748",
          }}
        />
        <ProductUI
          classes="w-[100%]"
          element={{
            image:
              "https://images.uzum.uz/cri05kc2gps3jqbgftrg/t_product_540_high.jpg#1726309013748",
          }}
        />
        <ProductUI
          classes="w-[100%]"
          element={{
            image:
              "https://images.uzum.uz/cri05kc2gps3jqbgftrg/t_product_540_high.jpg#1726309013748",
          }}
        />
      </div>
    </div>
  );
};

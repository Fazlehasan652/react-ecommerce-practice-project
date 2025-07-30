import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import useFireStore from "../../app/fireStore";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["products"],
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      async queryFn() {
        try {
          //   const productsCollectionRef = collection(db, "products");
          //   const data = await getDocs(productsCollectionRef);
          //   const filteredData = data.docs.map((doc) => ({
          //     id: doc.id,
          //     ...doc.data(),
          //   }));
          //   return { data: filteredData, error: null };

          const data = useFireStore();
          return data;
        } catch (error) {
          console.log(error.message);
          return { error: `Failed to fetch Products from db ${error.message}` };
        }
      },
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      queryFn: async (product) => {
        try {
          await addDoc(collection(db, "products"), product);
          return { data: product };
        } catch (error) {
          return { error: `Failed to fetch Products from db ${error.message}` };
        }
      },
      invalidatesTags: ["products"]
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation } = apiSlice;

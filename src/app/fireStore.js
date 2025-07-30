import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

async function useFireStore() {
  const productionCollectionRef = collection(db, "products");
  const data = await getDocs(productionCollectionRef);
  const filteredData =  data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return { data: filteredData, error: null };
}

export default useFireStore;

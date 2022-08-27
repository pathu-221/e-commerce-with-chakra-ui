import { db } from '../firebase/firebase.utils';
import { getDocs,  collection    } from 'firebase/firestore';

// export const addcollection = async (collectionkey, objectstoadd) => {

//     const batch = writeBatch(db);
//     console.log(objectstoadd);
//     objectstoadd.forEach(obj =>
//         {
//             const docRef =  doc(collection(db, collectionkey),`${obj.name}`); 
//             batch.set(docRef, obj, { merge: true});
//         }
//      )
//      await batch.commit();
// }

export const getCollectionCategories = async () => {
    const category_array = [];
   const querySnapshot = await getDocs(collection(db, 'categories'));
   querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots]
    category_array.push(doc.data());
  });

  return category_array;
}


export const getcategoryProducts = async (categoryName) => {
    const products_array = [];
   const querySnapshot = await getDocs(collection(db, `categories/${categoryName}/products`));
   querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots]
    products_array.push(doc.data());
  });

  return products_array;
}


// export const addProductstodatabase = async (collectionkey, categoryName, products) => {
//     const batch = writeBatch(db);
//     console.log(categoryName);
//     products.forEach(obj =>
//         {
//             const docRef =  doc(collection(db, `${collectionkey}/${categoryName}/products`), `id:${obj.id}`); 
//             batch.set(docRef, obj, { merge: true});
//         }
//      )
//      await batch.commit();
// }
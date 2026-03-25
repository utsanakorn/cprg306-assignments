import { db } from "../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";

/**
 * 
 * @param {string} userId 
 * @returns {Promise<Array>} 
 */
export async function getItems(userId) {
  const items = [];
  
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);
  const querySnapshot = await getDocs(q);
  
  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data()
    });
  });
  
  return items;
}

/**
 * 
 * @param {string} userId 
 * @param {Object} item 
 * @returns {Promise<string>} 
 */
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  
  const docRef = await addDoc(itemsRef, item);
  
  return docRef.id;
}

export async function deleteItem(userId, itemId) {
  const itemRef = doc(db, "users", userId, "items", itemId);
  await deleteDoc(itemRef);
}
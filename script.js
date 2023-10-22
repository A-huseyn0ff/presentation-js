// function fibonacciSearch(arr, target) {
//     let fib2 = 0; // (n-2) ci Fibonacci number
//     let fib1 = 1; // (n-1) ci Fibonacci number
//     let fib = fib2 + fib1; // n ci Fibonacci number
  
//     while (fib < arr.length) {
//       fib2 = fib1;
//       fib1 = fib;
//       fib = fib2 + fib1;
//     }
  
//     let offset = -1; // offset from the start of the array
  
//     while (fib > 1) {
//       const i = Math.min(offset + fib2, arr.length - 1);
  
//       if (arr[i] < target) {
//         fib = fib1;
//         fib1 = fib2;
//         fib2 = fib - fib1;
//         offset = i;
//       } else if (arr[i] > target) {
//         fib = fib2;
//         fib1 = fib1 - fib2;
//         fib2 = fib - fib1;
//       } else {
//         return i;
//       }
//     }
  
//     if (fib1 === 1 && arr[offset + 1] === target) {
//       return offset + 1;
//     }
  
//     return -1; // target not found
//   }

//   // example
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const targetElement = 6;

// const result = fibonacciSearch(array, targetElement);
// if (result !== -1) {
//   console.log("Element found at index", result);
// } else {
//   console.log("Element not found in the array.");
// }
  

  
//-----------------------------------------------------------------------------------------------------


// function countingSort(arr) {
// // arraydəki max dəyəri tapiriq
//     const max = Math.max(...arr);

// // bir count array yaradırıq ki ,
// //arrayimizdəki dəyərlərin neçə dəfə təkrarlandığın ortaya cıxarsın
//     const count = new Array(max + 1).fill(0);

// //Hər bir elementin neçə dəfə təkrarlandığını tapır
//     for (let i = 0; i < arr.length; i++) {
//       count[arr[i]]++;
//     }
  
//     // count array-ə təkrarlar məcmusunu mənimsədir
//     for (let i = 1; i < count.length; i++) {
//       count[i] += count[i - 1];
//     }
  
//     // bir sorted array,yəni sıralanmış array yaradırıq.
//     const sorted = new Array(arr.length);
//     for (let i = arr.length - 1; i >= 0; i--) {
//       sorted[count[arr[i]] - 1] = arr[i];
//       count[arr[i]]--;
//     }
  
//     return sorted;
//   }
  
//   // yoxlanış
//   const array = [4, 2, 2, 8, 3, 3, 1];
//   const sortedArray = countingSort(array);
//  console.log(sortedArray);


//------------------------------------------------------------------------------------------


//  function pigeonholeSort(arr) {
//     // arraydəki max və min dəyəri tapırıq
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
    
//     // bir pigeonholes yaradırıq (təkrarlardan ibarət)
//     let pigeonholes = new Array(max - min + 1).fill(0);
    
//     // arraydəki dəyərlərə əsasən təkrarları artırın
//     for (let i = 0; i < arr.length; i++) {
//       pigeonholes[arr[i] - min]++;
//     }
    
// //bir sıralanmış array (sorted array) yaradırıq,
// //bu arrayə elementləri sıralı şəkildə düzürük
//     let sortedArray = [];
//     for (let i = 0; i < pigeonholes.length; i++) {
//       while (pigeonholes[i] > 0) {
//         sortedArray.push(i + min);
//         pigeonholes[i]--;
//       }
//     }
    
//     return sortedArray;
//   }
  
//   // yoxlanış
//   let arr = [8, 3, 2, 7, 4, 6, 8];
//   let sortedArr = pigeonholeSort(arr);
//   console.log(sortedArr); // cvb: [2, 3, 4, 6, 7, 8, 8]
  
     
//----------------------------------------------------------------------------



// function jumpSearch(arr, target) {
//     const n = arr.length;
//     let step = Math.floor(Math.sqrt(n)); 
//     let prev = 0;
//     // Target elementinin mövcud ola biləcəyi bloku tapırıq
//     while (arr[Math.min(step, n) - 1] < target) {
//       prev = step;
//       step += Math.floor(Math.sqrt(n));
//       if (prev >= n) {
//         return -1; // Target element tapılmadı
//       }
//     }
  
//     // Müəyyən edilmiş blok daxilində linear search edin
//     while (arr[prev] < target) {
//       prev++;
  
//       if (prev === Math.min(step, n)) {
//         return -1; //  target dəyəri tapılmadı
//       }
//     }
  
//     if (arr[prev] === target) {
//       return prev; // target dəyəri bu indexdə tapıldı
//     }
  
//     return -1; // target dəyəri tapılmadı
//   }
  
//   // yoxlanış
//   const array = [1, 3, 5, 7, 9, 11, 13, 15, 17];
//   const target = 9;
//   const index = jumpSearch(array, target);
//   console.log(index);
  
  
  
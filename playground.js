// 1000000000000000000  Ether to Wei
// 1000000000000000000  EUC

// 1000000000 Ether to gwei
// 1000000000 EUC

// 1000000000000000000 gwei to wei
// 1000000000000000000 EUC

// 1.000000000 gwei to ether
// 1 EUC

// 1000000000.000000000 wei to gwei
// 1000000000 EUC

// 1.000000000000000000 wei to ether
// 1 EUC

//==================================================================

// 0.000000001: 1 wei - gwei
// 0.000000001 EUC

// 0.000000000000000001: 1 wei - ether
// 0.000000000000000001 EUC

// 1000000000: 1 gwei to wei
// 1000000000

// 0.000000001: 1 gwei to ether
// 0.000000001

function convert(amount, fromUnit, toUnit) {
  if (fromUnit === 'ether') {
    if (toUnit === 'wei') {
      return Math.round(amount * 1e18);
    } else if (toUnit === 'gwei') {
      return Math.round(amount * 1e9);
    }
  } else if (fromUnit === 'gwei') {
    if (toUnit === 'wei') {
      return Math.round(amount * 1e9);
    } else if (toUnit === 'ether') {
      return Number(amount / 1e9).toFixed(9);
    }
  } else if (fromUnit === 'wei') {
    if (toUnit === 'gwei') {
      //   return Number(amount / 1e9).toFixed(9);

      let Num = (amount / 1e9).toFixed(9);
      if (Number.isInteger(Num)) {
        return Num;
      } else {
        return Number(Num).toFixed(9);
      }

    } else if (toUnit === 'ether') {
      // return Number(amount / 1e18).toFixed(18);

      let Num = (amount / 1e18).toFixed(18);
      if (Number.isInteger(Num)) {
        return Num;
      } else {
        let hal = Number(Num)
        return hal.toFixed(18);
      }

    }
  }
}

// function checkDecimal(num) {
//   if (Number.isInteger(num)) {
//     return num;
//   } else {
//     let val = Number(num)
//     return val.toFixed(9);
//   }
// }

  console.log(convert(1, 'ether', 'wei')); // Output: 1000000000000000000
  console.log(convert(1, 'ether', 'gwei')); // Output: 1000000000
  console.log(convert(1000000000, 'gwei', 'wei')); // Output: 1000000000
  console.log(convert(1000000000, 'gwei', 'ether')); // Output: 1
  console.log(convert(1000000000000000000, 'wei', 'gwei')); // Output: 1000000000
  console.log(convert(1000000000000000000, 'wei', 'ether')); // Output: 1
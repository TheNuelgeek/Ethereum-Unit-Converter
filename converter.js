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
        //   return Number(amount / 1e9).toFixed(9);
            let num = (amount / 1e9).toFixed(9);
            if (Number.isInteger(Number(num))) {
                return Number(num);
            } else {
                return Number(num).toFixed(9);
            }
        }
      } else if (fromUnit === 'wei') {
        if (toUnit === 'gwei') {
        //  return Number(amount / 1e9).toFixed(9);
            let num = (amount / 1e9).toFixed(9);
            if (Number.isInteger(Number(num))) {
                return Number(num);
            } else {
                return Number(num).toFixed(9);
            }
        
        } else if (toUnit === 'ether') {
        //   return Number(amount / 1e18).toFixed(18);
            let num = (amount / 1e18).toFixed(18);
            if (Number.isInteger(Number(num))) {
                return Number(num);
            } else {
                return Number(num).toFixed(18);
            }
        }
    }
}
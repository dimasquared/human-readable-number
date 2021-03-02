module.exports = function toReadable (number) {

  if (number === 0) return 'zero';
    
  const numberArr = number.toString().split('').reverse();
  let readableNumber, unit, decimal, hundred;
  
	switch(numberArr[0]) {
		case '1':
			unit = 'one';
			break;
		case '2':
			unit = 'two';
			break;
		case '3':
			unit = 'three';
			break;
		case '4':
			unit = 'four';
			break;
		case '5':
			unit = 'five';
			break;
		case '6':
			unit = 'six';
			break;
		case '7':
			unit = 'seven';
			break;
		case '8':
			unit = 'eight';
			break;
		case '9':
			unit = 'nine';
            break;
        default:
            unit = '';
            break;
	}

	switch(numberArr[1]) {
		case '1':
			switch(numberArr[0]) {
                case '1':
                    decimal = 'eleven';
                    break;
                case '2':
                    decimal = 'twelve';
                    break;
                case '3':
                    decimal = 'thirteen';
                    break;
                case '4':
                    decimal = 'fourteen';
                    break;
                case '5':
                    decimal = 'fifteen';
                    break;
                case '6':
                    decimal = 'sixteen';
                    break;
                case '7':
                    decimal = 'seventeen';
                    break;
                case '8':
                    decimal = 'eighteen';
                    break;
                case '9':
                    decimal = 'nineteen';
                    break;
                case '0':
                    decimal = 'ten';
                    break;
            }
            unit = '';
			break;
		case '2':
			decimal = 'twenty ';
			break;
		case '3':
			decimal = 'thirty ';
			break;
		case '4':
			decimal = 'fourty ';
			break;
		case '5':
			decimal = 'fifty ';
			break;
		case '6':
			decimal = 'sixty ';
			break;
		case '7':
			decimal = 'seventy ';
			break;
		case '8':
			decimal = 'eighty ';
			break;
		case '9':
			decimal = 'ninety ';
            break;
        default:
            decimal = '';
            break;
    }
    
    switch(numberArr[2]) {
		case '1':
			hundred = 'one hundred ';
			break;
		case '2':
			hundred = 'two hundred ';
			break;
		case '3':
			hundred = 'three hundred ';
			break;
		case '4':
			hundred = 'four hundred ';
			break;
		case '5':
			hundred = 'five hundred ';
			break;
		case '6':
			hundred = 'six hundred ';
			break;
		case '7':
			hundred = 'seven hundred ';
			break;
		case '8':
			hundred = 'eight hundred ';
			break;
		case '9':
			hundred = 'nine hundred ';
            break;
        default:
            hundred = '';
            break;
    }
    
    readableNumber = hundred + decimal + unit;
	return readableNumber.trim();		
}

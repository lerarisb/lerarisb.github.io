function validator(cardNumber){
  
let a;
let duplicatedNummber;
        for (i = 0; i < cardNumber.length; i++){
                if ((cardNumber.length == 14) || (cardNumber.length == 16)
                        if (i % 2 == 0){
                                a = cardNumber[i] * 2;
                                duplicatedNumber += a;
                                }
                        else{
                                duplicatedNumber += cardNumber[i];
                                }
                else{
                        if (i % 2 != 0){
                                a = cardNumber[i] * 2;
                                duplicatedNumber += a;

                        else{
                                duplicatedNumber += cardNumber[i];

        }}}


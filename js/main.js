const demoApiKey = "699C50154819EC2DD423C1F15FDCDE64";
const BASE_URL = "https://www.cediplus.com/apiplus/plus_v1";

let action = "sendbill",
  wallet_type = 'm',
  amount = 1.00,
  description = "For test purpose";

let successMessage = `Your payment of ${amount} was successful`;

$('#pay').click(function (e) {
  let wallet_type = $('#type option:selected').val();
  let wallet_number = $('#number').val();

  if (wallet_type !== 'm' && wallet_type != 't') {
    e.preventDefault();
    alert('Wallet type must be either MTN or TIGO');
    return false;
  }

  if (wallet_number.trim().length === 0) {
    e.preventDefault();
    alert("Wallet Number is empty!");
    return false;
  }

  var postData = {
    "api_key": demoApiKey,
    "action": action,
    "wallet_number": wallet_number,
    "wallet_type": wallet_type,
    "amount": amount,
    "description": description
  };

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  };

  axios.post(BASE_URL, postData, axiosConfig)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
});
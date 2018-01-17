window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask or Mist!')
  }
  // Now you can start your app & access web3 freely:
  connectEWM();

})

function connectEWM() {
	ewmInstance = web3.eth.contract(EtherWhuffieManagerABI).at(EtherWhuffieManagerAddress);

	// set initial address to 0
	address = "";

	// initialize user interface
	init();
}

function setAddress(_of) {
	address = _of;
}

function getStats() {
	stats = null;

	ewmInstance.stats(address, function(error, result){
		if(!error){
			stats = result;
		}
		else {
			console.error(error);
			return;
		}
	});
}

function sendPositiveWhuffies(amount, message) {
	ewmInstance.sendPositiveWhuffies(address, message, {value: amount}, function(error, result) {
		if (!error) {
			return;
		}
		else {
			console.error(error);
			return;
		}
	});
}

function sendNegativeWhuffies(amount, message) {
	ewmInstance.sendNegativeWhuffies(address, message, {value: amount}, function(error, result) {
		if (!error) {
			return;
		}
		else {
			console.error(error);
			return;
		}
	});
}


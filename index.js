const { getModelList, purchaseModel } = require('chain-ai-connect');

// Mendapatkan daftar model yang tersedia
getModelList().then(modelList => {
    console.log('Available models:', modelList);
}).catch(error => {
    console.error('Error getting model list:', error);
});

// Contoh pembelian model
const modelId = 'xyz123';
const userId = 'user123';
purchaseModel(modelId, userId).then(transactionReceipt => {
    console.log('Transaction receipt:', transactionReceipt);
}).catch(error => {
    console.error('Error purchasing model:', error);
});


const express = require('express');
const app = express();




const PORT = process.env.RUNNING_PORT || 5500;

app.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT}`);
});


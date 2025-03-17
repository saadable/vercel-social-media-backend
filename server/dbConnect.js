const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri = 'mongodb+srv://saadsajid098:xVTGM6J2CavSA2qU@cluster0.lnf3e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

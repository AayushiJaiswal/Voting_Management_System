import mongoose from 'mongoose';


const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://aayushi:MySecurePass123@cluster0.jy1gs.mongodb.net/votingS?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error:', error);
    }
}

Connection();

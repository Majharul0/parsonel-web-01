import massageSh from '../models/massage'


 const massageSend = async (req,res) =>{
    const smsInfo =  req.body;
    const addSms = new massageSh(smsInfo);
    console.log(smsInfo);
    try {
        await addSms.save();
        res.status(201).json(addSms);
        console.log(addSms);
    } catch (error) {
        res.status(400).json({message: error.message});

    }

}
export default massageSend;
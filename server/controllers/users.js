import UserModel from "../models/User";

// READ 
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => UserModel.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export { getUser, getUserFriends }
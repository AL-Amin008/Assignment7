exports.create = async (req, res) => {
    try {
       
        res.status(201).json({ status: "success", data: "Comment created successfully" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

exports.read = async (req, res) => {
    try {
        
        res.status(200).json({ status: "success", data: "Comment data goes here" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

exports.delete = async (req, res) => {
    try {
       
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

exports.update = async (req, res) => {
    try {
        
        res.status(200).json({ status: "success", data: "Comment updated successfully" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

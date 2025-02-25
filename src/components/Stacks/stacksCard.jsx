import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import "./StackCard.css";

const StackCard = ({ name, icon, description }) => {
    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="stack-card">
            <Card className="card-container">
                <CardHeader className="card-header">
                    {icon && <img src={icon} alt={name} className="stack-icon" />}
                    <CardTitle className="card-title">{name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="card-description">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default StackCard;

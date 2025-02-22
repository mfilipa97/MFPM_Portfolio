import { motion } from "framer-motion";

export default function CuteModal({ title, description, closeModal }) {
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(204,204,204,0.66)', // Slightly darker overlay
                zIndex: 1000,
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{
                    backgroundColor: '#f0f0f0', // Soft pastel pink
                    padding: '30px',
                    borderRadius: '25px', // Rounded corners
                    border: '4px dotted #232323FF', // Dotted border with pink color
                    boxShadow: '8px 8px 6px rgba(0, 0, 0, 0.2)', // Softer shadow
                    width: '320px',
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                {/* Close Button */}
                <button
                    style={{
                        position: 'absolute',
                        top: '-15px',
                        right: '-15px',
                        backgroundColor: '#FFC1CC', // Pink circle
                        borderRadius: '50%',
                        width: '35px',
                        height: '35px',
                        border: 'none',
                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                        cursor: 'pointer',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: 'transform 0.2s ease-in-out',
                    }}
                    onClick={closeModal}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    ✕
                </button>

                {/* Modal Title */}
                <h2
                    style={{
                        fontSize: '22px',
                        color: '#FF729F', // Bright and fun headline color
                        marginBottom: '15px',
                        fontWeight: '600',
                    }}
                >
                    {title}
                </h2>

                {/* Modal Description */}
                <p
                    style={{
                        fontSize: '16px',
                        color: '#555',
                        marginBottom: '20px',
                        lineHeight: '1.5',
                    }}
                >
                    {description}
                </p>

                {/* Close Modal Button */}
                <button
                    onClick={closeModal}
                    style={{
                        marginTop: '15px',
                        backgroundColor: '#FF729F', // Bright pink background
                        color: 'white',
                        padding: '10px 25px',
                        borderRadius: '20px', // Rounded for friendliness
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Soft button shadow
                        transition: 'transform 0.2s ease-in-out',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    Close
                </button>
            </motion.div>
        </div>
    );
}
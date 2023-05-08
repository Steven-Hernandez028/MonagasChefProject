import { motion } from "framer-motion";

function ArrowDown() {
  return (
    <>
      <motion.svg
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 8 }}
        transition={{ duration: 6, ease: "easeOut" }}
        exit={{ opacity: 0, y: 20 }}
        whileHover={{ scale: 1.1 }}
        viewBox="0 0 20 20"
        width="100"
        strokeWidth=".1"

        height="39"
      >
        <motion.path
          d="M10 15.5L5 10.5L6.5 9L10 12.5L13.5 9L15 10.5L10 15.5Z"
          fill="#fff"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut", loop:Infinity}}
        />

   

        
      <motion.text
        x="10"
        y="5"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily=" Hind Siliguri, sans-serif"
        fontSize="10"
        fill="#fff"
        color={"white"}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 6, ease: "easeOut" }}
        exit={{ opacity: 0, y: 20 }}
      >
        Scroll down
      </motion.text>

      </motion.svg>

    </>
  );
}

export default ArrowDown;

import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

function AboutImage() {
    return (
        <div className="flex justify-center">
            <MotionImage
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                alt="About"
                className="rounded-full border-4 border-sky-500"
                initial={{ borderColor: "rgba(0, 255, 255, 1)" }}
                animate={{
                    borderColor: ["rgba(0, 255, 255, 1)", "rgba(0, 255, 255, 0)"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                width={500}
                height={500}
            />
        </div>
    );
}

export default AboutImage;

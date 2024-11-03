import { motion } from "framer-motion";

type ChipProps = {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
};

export const Chip = ({ text, selected, setSelected }: ChipProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-muted-foreground hover:text-white hover:bg-muted-foreground/75"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative sm:text-sm md:text-base lg:font-mono lg:font-medium`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <div className="flex justify-center items-center">
          <div>
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.45 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-indigo-600 rounded-md text-red-500 focus:text-blue-500 "
            ></motion.span>
          </div>
        </div>
      )}
    </button>
  );
};

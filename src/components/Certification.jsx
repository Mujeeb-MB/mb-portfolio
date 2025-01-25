import React from "react";
import { CERTIFICATES } from "../constants";
import { motion } from "framer-motion";

const Certification = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="text-amber-400">Ce</span>rtification
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {CERTIFICATES.map((certificate, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative flex flex-col items-center justify-between p-4 border border-neutral-700 rounded-lg shadow-lg"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-58 object-cover rounded-t-lg cursor-pointer hover:opacity-80"
              onClick={() => window.open(certificate.link, "_blank")}
            />
            <div className="text-center mt-4">
              <h2 className="text-start text-2xl font-semibold mb-2">
                {certificate.title}
              </h2>
              <p className=" mr-2 mb-4 bg-neutral-900  py-1 text-sm font-medium text-green-500 rounded ">
                {certificate.organization}
              </p>
            </div>
            <div className="flex flex-wrap justify-center mt-2">
              {certificate.outputs.map((output, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 bg-neutral-900 px-1 py-1 text-sm font-medium text-amber-500 rounded"
                >
                  {output}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certification;

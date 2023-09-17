"use client";

// next image
import Image from "next/image";

// framer-motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "/variants";

const Cta = () => {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-center pb-0 bg-[#b2b72c]/10"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* text */}

          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Download our App now and hit the road woth ease
              </h2>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem et ab, quasi laudantium nostrum blanditiis nihil quam
                repellendus vero tempora.
              </motion.p>
              {/* btns */}
              <motion.div
                className="flex gap-x-3 justify-center md:justify-start"
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
              >
                <button className="btn-cta">
                  <Image
                    src="/icons/buttons/google-play.svg"
                    width={132}
                    height={36}
                    alt=""
                  />
                </button>
                <button className="btn-cta">
                  {" "}
                  <Image
                    src="/icons/buttons/app-store.svg"
                    width={132}
                    height={36}
                    alt=""
                  />
                </button>
              </motion.div>
            </div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1
        md:order-none "
          >
            <Image
              src={"/images/cta/phone.svg"}
              width={320}
              height={640}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

import React from "react";
import "./SerciceCare.css";
import imge1 from "../../assets/images/f1.jpg";
import imge2 from "../../assets/images/f2.jpg";
import imge3 from "../../assets/images/f3.jpg";
import imge4 from "../../assets/images/f4.jpg";
// import imge5 from "../../assets/images/why-choose-us.jpg";
const SerciceCare = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <h3 class="h2 fw-bold mt-3">Because we care about your safety</h3> */}
      <div class="row align-items-center">
        <div class="  ">
          <div class="grid grid-flow-row grid-cols-4">
            {/* <!-- Safety feature-01  --> */}
            <div class="">
              <div class="bg-white p-4 flex flex-col justify-center items-center">
                <img src={imge1} alt="Choose" class="imgCare img-fluid" />
                <h2 class="h6 fw-bold">Ensuring Masks</h2>
              </div>
            </div>
            {/* <!-- Safety feature-02  --> */}
            <div class="">
              <div class="bg-white p-4 flex flex-col justify-center items-center">
                <img
                  src={imge2}
                  width="50"
                  alt="Choose"
                  class="imgCare img-fluid me-2"
                />
                <h2 class="h6 fw-bold">24/7 Support</h2>
              </div>
            </div>
            {/* <!-- Safety feature-03  --> */}
            <div class="">
              <div class="bg-white p-4 flex flex-col justify-center items-center">
                <img
                  src={imge3}
                  width="50"
                  alt="Choose"
                  class="imgCare img-fluid me-2"
                />
                <h2 class="h6 fw-bold">Sanitizing Hands & Equipment</h2>
              </div>
            </div>
            {/* <!-- Safety feature-04  --> */}
            <div class="">
              <div class="bg-white p-4 flex flex-col justify-center items-center">
                <img
                  src={imge4}
                  width="50"
                  alt="Choose"
                  class="imgCare img-fluid me-2"
                />
                <h2 class="h6 fw-bold">Ensuring Gloves</h2>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="col-lg-7">
          <img
            src={imge5}
            alt="Choose"
            class="img-fluid mx-auto d-block rounded"
          />
        </div> */}
      </div>
    </div>
  );
};

export default SerciceCare;

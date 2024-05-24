import React from "react";
import '../styles/Sub.css'
const Subscribe = () => {
   
  return (
    <div>
      <div
        data-test="backgroundImg"
        className="nopurge_subscribeContainer_hgDMQaTO"
      >
        <div className="nopurge_box_LgkjiksH">
          <h2 data-test="hungryText" className="nopurge_hungryText_am7ntJ5h text-4xl font-semibold">
            Hungry for more?
          </h2>
          <div
            data-test="hungryText-description"
            className="nopurge_bannerDescription_qcilUBs3"
          >
            Sign up to our newsletter for exciting updates and weekly
            inspiration, delivered straight to your inbox.
          </div>
          <form
            name="index"
            method="POST"
            novalidate="novalidate"
            data-test="hungryText-subscribe"
            className="nopurge_form_hCtW4D71 nopurge_subscribeForm_-s8v8oVx nopurge_shortSubsbscribe_Uyqwh7kS"
          >
            <label className="nopurge_label_OAl7x4FB">
              <span className="nopurge_inputTitle_c7AcgRMM">Email address</span>
              <div className="nopurge_inputWrapper_rWfxSSPE">
                <button
                  data-test="button"
                  className="nopurge_btn_Oxtwxp2e nopurge__theme_primary_+F2Nua80 nopurge_builtIn_4fQ2cpHX nopurge_rightLabel_BMEwgKTD"
                >
                  Subscribe
                </button>
                <input
                  name="email"
                  required="required"
                  type="text"
                  autocomplete="email"
                  placeholder=""
                  className="nopurge_input_u61p22ky nopurge_rightPadding_L6RiASC6"
                />
              </div>
            </label>
          </form>
        </div>
        <div
          data-test="hungryText-additionalInfo"
          className="nopurge_additionalInfo_OeSMUYMh text-color1 text-lg"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque itaque illum sequi, animi ex placeat maiores laudantium, iusto nemo ratione hic cupiditate quod? Id consequatur dolor nam, est officiis fuga nisi dolores esse sit tenetur sed delectus facere rem? Repellendus tenetur nemo sequi dolore eius temporibus veritatis voluptas vero? Fugit!
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

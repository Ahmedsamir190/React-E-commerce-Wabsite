function Aside() {
  return (
    <aside>
      <div className="aside ">
        <form className="mobiephone-form">
          <div className="check ">
            <h3>brand</h3>
            <div className="input-check  ">
              <input
                id="getallproduct"
                type={"checkbox"}
                name={"getallproduct"}
              />
              <label htmlFor="getallproduct">Get-All-Product</label>
            </div>
            <div className="input-check  ">
              <input id="apple" type={"checkbox"} name={"os"} />
              <label htmlFor="apple">Apple</label>
            </div>
            <div className="input-check ">
              <input id="samsung" type={"checkbox"} name={"os"} />
              <label htmlFor="samsung">Samsung</label>
            </div>
            <div className="input-check ">
              <input id="OPPO" type={"checkbox"} name={"os"} />
              <label htmlFor="OPPO">OPPO</label>
            </div>
            <div className="input-check ">
              <input id="Huawei" type={"checkbox"} name={"os"} />
              <label htmlFor="Huawei">Huawei</label>
            </div>
            <div className="input-check ">
              <input id="OPPO" type={"checkbox"} name={"os"} />
              <label htmlFor="OPPO">Microsoft</label>
            </div>
          </div>

          <div className="check ">
            <h3> color</h3>

            <div className="input-check ">
              <input id="blue" type={"checkbox"} name={"os"} />
              <label htmlFor="blue">blue</label>
            </div>
            <div className="input-check ">
              <input id="red" type={"checkbox"} name={"os"} />
              <label htmlFor="red">red</label>
            </div>
            <div className="input-check ">
              <input id="black" type={"checkbox"} name={"os"} />
              <label htmlFor="black">black</label>
            </div>
          </div>
          <div className="check ">
            <h3> Network Type</h3>

            <div className="input-check ">
              <input id="5G" type={"checkbox"} name={"os"} />
              <label htmlFor="5G">5G</label>
            </div>
            <div className="input-check ">
              <input id="4G" type={"checkbox"} name={"os"} />
              <label htmlFor="4G">4G</label>
            </div>
            <div className="input-check ">
              <input id="3G" type={"checkbox"} name={"os"} />
              <label htmlFor="3G">3G</label>
            </div>
          </div>
        </form>
      </div>
    </aside>
  );
}
export default Aside;

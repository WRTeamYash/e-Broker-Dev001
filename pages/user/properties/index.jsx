import AddPropertyTabs from "@/Components/AddPropertyTabs/AddPropertyTabs";
import VerticleLayout from "@/Components/AdminLayout/VerticleLayout";
import { languageData } from "@/store/reducer/languageSlice";
import { translate } from "@/utils";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const index = () => {
    const lang = useSelector(languageData);

    useEffect(() => {}, [lang]);
    return (
        <VerticleLayout>
            <div className="container">
                <div className="dashboard_titles">
                    <h3>{translate("addProp")}</h3>
                </div>
                <div className="card" id="add_prop_tab">
                    <AddPropertyTabs />
                </div>
            </div>
        </VerticleLayout>
    );
};

export default index;

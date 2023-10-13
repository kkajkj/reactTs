import React, {ReactNode } from "react";
import Script from "react-load-script";
import HeadTop from "./Navbar/HeadTop";
import MainHead from "./Navbar/MainHead";
import Footer from "./Footer/Footer";

interface LayoutProps {
    children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const handleScriptError = () => {
        console.log("Error while loading script");
    };

    const handleScriptLoad = () => {
        console.log("Script loaded successfully");
        // You can perform any actions after script load if needed
    };
   

    return (
        <>
            <HeadTop />
            <MainHead />
            
            <main>{children}</main>

            <Footer />
            <Script
                url="assets/js/jquery.js"
                async
                defer
                onError={handleScriptError as any}
                onLoad={handleScriptLoad as any}
            />
               <Script
                url="assets/js/bootstrap.min.js"
                async
                defer
                onError={handleScriptError as any}
                onLoad={handleScriptLoad as any}
            />
            <Script
                url="assets/js/bootsnav.js"
                onError={handleScriptError as any}
                onLoad={handleScriptLoad as any}
            />
         
            <Script
                url="assets/js/feather.min.js"
                async
                defer
                onError={handleScriptError as any}
                onLoad={handleScriptLoad as any}
            />
            <Script
                url="assets/js/jquery.counterup.min.js"
                async
                defer
                onError={handleScriptError as any}
                onLoad={handleScriptLoad as any}
            />
            
            <Script
                url="assets/js/slick.min.js"
                async
                defer
                onError={handleScriptError as any}
                onLoad={handleScriptLoad as any}
            />
            <Script
                url="assets/js/waypoints.min.js"
                async
                defer
                onError={handleScriptError as any}
                onLoad={handleScriptLoad as any}
            />
           <Script
                url="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
                async
                defer
                onError={handleScriptError as any}
                onLoad={handleScriptLoad as any}
            />
              <Script
                url="assets/js/custom.js"
                async
                defer
                onError={handleScriptError as any}
                onLoad={handleScriptLoad as any}
            />
        </>
    );
};

export default Layout;

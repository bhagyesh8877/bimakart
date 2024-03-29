//  import Sidebar from "@/components/sidebar/sidebar"

//  //import styles from "../ui/dashboard/dashboard.module.css"
//  import Footer from "@/components/footer/footer";

// const Layout = ({children}) => {
//     return (
//         <div className={styles.container}>
//             <div className={styles.menu}>
//                  <Sidebar/>
//             </div>
//             <div className={styles.content}>

//                 {children}
//                 <Footer/>
//             </div>
//         </div>
//     )
// }

// export default Layout


"use client";

import Sidebar from "@/components/sidebar/sidebar";
import styles from "@/ui/dashboard/dashboard.module.css";
import Footer from "@/components/footer/footer";

const Layout = ({ children }) => {
  return (
    <div>
    <div className={styles.container}>
      <div className={styles.menu}>
      <Sidebar />
      </div>
      <div className={styles.content}>
        {children}
        
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Layout;

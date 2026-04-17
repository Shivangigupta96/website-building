
// import { useState } from "react";
// import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { motion } from "motion/react";


// function Pricing() {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState("free");
//   // New state to track hover for the button text change
//   const [hoveredPlan, setHoveredPlan] = useState(null);

//   const plans = [
//     {
//       id: "free",
//       name: "Free",
//       price: "₹0",
//       credits: 100,
//       description: "Perfect for beginners starting interview preparation.",
//       features: [
//         "100 AI Interview Credits",
//         "Basic Performance Report",
//         "Voice Interview Access",
//         "Limited History Tracking",
//       ],
//       default: true,
//     },
//     {
//       id: "basic",
//       name: "Starter Pack",
//       price: "₹100",
//       credits: 150,
//       description: "Great for focused practice and skill improvement.",
//       features: [
//         "150 AI Interview Credits",
//         "Detailed Feedback",
//         "Performance Analytics",
//         "Full Interview History",
//       ],
//     },
//     {
//       id: "pro",
//       name: "Pro Pack",
//       price: "₹500",
//       credits: 650,
//       description: "Best value for serious job preparation.",
//       features: [
//         "650 AI Interview Credits",
//         "Advanced AI Feedback",
//         "Skill Trend Analysis",
//         "Priority AI Processing",
//       ],
//       badge: "Best Value",
//     },
//   ];

  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-5 py-16 px-6">
//       <div className="max-w-6xl mx-auto mb-14 flex items-start gap-4">
//         <button
//           onClick={() => navigate("/")}
//           className="mt-2 p-3 rounded-full bg-white shadow hover:shadow-md transition"
//         >
//           <FaArrowLeft className="text-gray-600" />
//         </button>

//         <div className="text-center w-full">
//           <h1 className="text-4xl font-bold text-gray-800">Choose Your Plan</h1>
//           <p className="text-gray-500 mt-3 text-lg">
//             Flexible pricing to match your interview preparation goals.
//           </p>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {plans.map((plan) => {
//           const isSelected = selectedPlan === plan.id;
//           const isHovered = hoveredPlan === plan.id;

//           return (
//             <motion.div
//               key={plan.id}
//               whileHover={!plan.default && { scale: 1.03 }}
//               onClick={() => !plan.default && setSelectedPlan(plan.id)}
//               className={`relative rounded-3xl p-8 transition-all duration-300 border ${
//                 isSelected
//                   ? "border-emerald-600 shadow-2xl bg-white"
//                   : "border-gray-200 bg-white shadow-md"
//               } ${plan.default ? "cursor-default" : "cursor-pointer"}`}
//             >
//               {plan.badge && (
//                 <div className="absolute top-6 right-6 bg-emerald-600 text-white text-xs px-4 py-1 rounded-full shadow">
//                   {plan.badge}
//                 </div>
//               )}

//               {plan.default && (
//                 <div className="absolute top-6 right-6 bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
//                   Default
//                 </div>
//               )}

//               <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>

//               <div className="mt-4">
//                 <span className="text-3xl font-bold text-emerald-600">{plan.price}</span>
//                 <p className="text-gray-500 mt-1">{plan.credits} Credits</p>
//               </div>

//               <p className="text-gray-500 mt-4 text-sm leading-relaxed">{plan.description}</p>

//               <div className="mt-6 space-y-3 text-left">
//                 {plan.features.map((feature, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <FaCheckCircle className="text-emerald-500 text-sm" />
//                     <span className="text-gray-700 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               {plan.default !== true && (
//                 <button
//                   onMouseEnter={() => setHoveredPlan(plan.id)}
//                   onMouseLeave={() => setHoveredPlan(null)}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     // Add your payment logic here
//                     console.log("Proceeding to pay for:", plan.id);
//                   }}
//                   className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     isSelected || isHovered
//                       ? "bg-emerald-600 text-white shadow-lg"
//                       : "bg-gray-100 text-gray-700 hover:bg-emerald-500 hover:text-white"
//                   }`}
//                 >
//                   {/* Text changes if the plan is selected OR if it's currently being hovered */}
//                   {isSelected || isHovered ? "Proceed to Pay" : "Select Plan"}
//                 </button>
//               )}
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Pricing;
















































// import { useState } from "react";
// import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { motion } from "motion/react";
// import { loadStripe } from "@stripe/stripe-js";

// // ✅ Load Stripe
// const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY");

// function Pricing() {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState("free");
//   const [hoveredPlan, setHoveredPlan] = useState(null);

//   const plans = [
//     {
//       id: "free",
//       name: "Free",
//       price: 0,
//       credits: 100,
//       description: "Perfect for beginners starting interview preparation.",
//       features: [
//         "100 AI Interview Credits",
//         "Basic Performance Report",
//         "Voice Interview Access",
//         "Limited History Tracking",
//       ],
//       default: true,
//     },
//     {
//       id: "basic",
//       name: "Starter Pack",
//       price: 100,
//       credits: 150,
//       description: "Great for focused practice and skill improvement.",
//       features: [
//         "150 AI Interview Credits",
//         "Detailed Feedback",
//         "Performance Analytics",
//         "Full Interview History",
//       ],
//     },
//     {
//       id: "pro",
//       name: "Pro Pack",
//       price: 500,
//       credits: 650,
//       description: "Best value for serious job preparation.",
//       features: [
//         "650 AI Interview Credits",
//         "Advanced AI Feedback",
//         "Skill Trend Analysis",
//         "Priority AI Processing",
//       ],
//       badge: "Best Value",
//     },
//   ];

//   // ✅ REAL PAYMENT FUNCTION
//   const handlePayment = async (plan) => {
//     try {
//       const stripe = await stripePromise;

//       const response = await fetch("http://localhost:5000/api/payment/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           product: {
//             name: plan.name,
//             price: plan.price,
//           },
//         }),
//       });

//       const data = await response.json();

//       if (!data.url) {
//         throw new Error("No checkout URL received");
//       }

//       // ✅ Redirect to Stripe
//       window.location.href = data.url;

//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("Payment failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-5 py-16 px-6">
//       <div className="max-w-6xl mx-auto mb-14 flex items-start gap-4">
//         <button
//           onClick={() => navigate("/")}
//           className="mt-2 p-3 rounded-full bg-white shadow hover:shadow-md transition"
//         >
//           <FaArrowLeft className="text-gray-600" />
//         </button>

//         <div className="text-center w-full">
//           <h1 className="text-4xl font-bold text-gray-800">Choose Your Plan</h1>
//           <p className="text-gray-500 mt-3 text-lg">
//             Flexible pricing to match your interview preparation goals.
//           </p>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {plans.map((plan) => {
//           const isSelected = selectedPlan === plan.id;
//           const isHovered = hoveredPlan === plan.id;

//           return (
//             <motion.div
//               key={plan.id}
//               whileHover={!plan.default && { scale: 1.03 }}
//               onClick={() => !plan.default && setSelectedPlan(plan.id)}
//               className={`relative rounded-3xl p-8 transition-all duration-300 border ${
//                 isSelected
//                   ? "border-emerald-600 shadow-2xl bg-white"
//                   : "border-gray-200 bg-white shadow-md"
//               } ${plan.default ? "cursor-default" : "cursor-pointer"}`}
//             >
//               {plan.badge && (
//                 <div className="absolute top-6 right-6 bg-emerald-600 text-white text-xs px-4 py-1 rounded-full shadow">
//                   {plan.badge}
//                 </div>
//               )}

//               {plan.default && (
//                 <div className="absolute top-6 right-6 bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
//                   Default
//                 </div>
//               )}

//               <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>

//               <div className="mt-4">
//                 <span className="text-3xl font-bold text-emerald-600">
//                   ₹{plan.price}
//                 </span>
//                 <p className="text-gray-500 mt-1">{plan.credits} Credits</p>
//               </div>

//               <p className="text-gray-500 mt-4 text-sm leading-relaxed">
//                 {plan.description}
//               </p>

//               <div className="mt-6 space-y-3 text-left">
//                 {plan.features.map((feature, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <FaCheckCircle className="text-emerald-500 text-sm" />
//                     <span className="text-gray-700 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               {plan.default !== true && (
//                 <button
//                   onMouseEnter={() => setHoveredPlan(plan.id)}
//                   onMouseLeave={() => setHoveredPlan(null)}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handlePayment(plan); // ✅ REAL CALL
//                   }}
//                   className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     isSelected || isHovered
//                       ? "bg-emerald-600 text-white shadow-lg"
//                       : "bg-gray-100 text-gray-700 hover:bg-emerald-500 hover:text-white"
//                   }`}
//                 >
//                   {isSelected || isHovered ? "Proceed to Pay" : "Select Plan"}
//                 </button>
//               )}
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Pricing;






















import { useState } from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";


function Pricing() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("free");
  // New state to track hover for the button text change
  const [hoveredPlan, setHoveredPlan] = useState(null);
     const handleBuy=async (planKey)=>{
    if(!userData){
      navigate("/")
      return
    }
    if(planKey=="free"){
      navigate("/Home")
      return
    }
    setLoading(planKey)
try {
  const result =await axios.post(`${serverUrl}/api/billing`,
    {planType:planKey},{withCredentials:true} )
   window.location.href=result.data.sessionsUrl
} catch (error) {
     console.log(error)
     setLoading(null)
}
   }

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      credits: 100,
      description: "Perfect for beginners starting interview preparation.",
      features: [
        "100 AI Interview Credits",
        "Basic Performance Report",
        "Voice Interview Access",
        "Limited History Tracking",
      ],
      default: true,
    },
    {
      id: "basic",
      name: "Starter Pack",
      price: "₹100",
      credits: 150,
      description: "Great for focused practice and skill improvement.",
      features: [
        "150 AI Interview Credits",
        "Detailed Feedback",
        "Performance Analytics",
        "Full Interview History",
      ],
    },
    {
      id: "pro",
      name: "Pro Pack",
      price: "₹500",
      credits: 650,
      description: "Best value for serious job preparation.",
      features: [
        "650 AI Interview Credits",
        "Advanced AI Feedback",
        "Skill Trend Analysis",
        "Priority AI Processing",
      ],
      badge: "Best Value",
    },
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-5 py-16 px-6">
      <div className="max-w-6xl mx-auto mb-14 flex items-start gap-4">
        <button
          onClick={() => navigate("/")}
          className="mt-2 p-3 rounded-full bg-white shadow hover:shadow-md transition"
        >
          <FaArrowLeft className="text-gray-600" />
        </button>

        <div className="text-center w-full">
          <h1 className="text-4xl font-bold text-gray-800">Choose Your Plan</h1>
          <p className="text-gray-500 mt-3 text-lg">
            Flexible pricing to match your interview preparation goals.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.id;
          const isHovered = hoveredPlan === plan.id;

          return (
            <motion.div
              key={plan.id}
              whileHover={!plan.default && { scale: 1.03 }}
              onClick={() => !plan.default && setSelectedPlan(plan.id)}
              className={`relative rounded-3xl p-8 transition-all duration-300 border ${
                isSelected
                  ? "border-emerald-600 shadow-2xl bg-white"
                  : "border-gray-200 bg-white shadow-md"
              } ${plan.default ? "cursor-default" : "cursor-pointer"}`}
            >
              {plan.badge && (
                <div className="absolute top-6 right-6 bg-emerald-600 text-white text-xs px-4 py-1 rounded-full shadow">
                  {plan.badge}
                </div>
              )}

              {plan.default && (
                <div className="absolute top-6 right-6 bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                  Default
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>

              <div className="mt-4">
                <span className="text-3xl font-bold text-emerald-600">{plan.price}</span>
                <p className="text-gray-500 mt-1">{plan.credits} Credits</p>
              </div>

              <p className="text-gray-500 mt-4 text-sm leading-relaxed">{plan.description}</p>

              <div className="mt-6 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.default !== true && (
                <button
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add your payment logic here
                    console.log("Proceeding to pay for:", plan.id);
                  }}
                  className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isSelected || isHovered
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-emerald-500 hover:text-white"
                  }`}
                >
                  {/* Text changes if the plan is selected OR if it's currently being hovered */}
                  {isSelected || isHovered ? "Proceed to Pay" : "Select Plan"}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
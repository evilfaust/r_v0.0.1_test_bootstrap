// export default function Alert({ bgColor, icon, status, message, onClick }: { bgColor: string; icon: string; status: string; message: string; onClick: () => void }) {
//   return (
//     <div className={`flex justify-between alert alert-${bgColor}`}>
//       <div className="flex gap-2">
//         <div>{icon}</div>
//         <div className="flex">
//           <span className="text-center text-light">{status} &nbsp;</span>
//           <p>{message}</p>
//         </div>
//       </div>
//       <button onClick={onClick}>✖</button>
//     </div>
//   );
// }

export default function Alert({ bgColor, icon, status, message, onClick }: { bgColor: string; icon: string; status: string; message: string; onClick: () => void }) {
  return (
      // <div className={`flex justify-between alert alert-${bgColor}`}>
      //     <div className="flex gap-2">
      //         <div>{icon}
      //             <span className="text-center text-light">{status} &nbsp;</span>
      //             <p>{message}</p>
      //         </div>
      //     </div>
      //     <button onClick={onClick}>✖</button>
      // </div>
    <div className={`alert alert-${bgColor} alert-dismissible fade show`} role="alert">
        {icon}
        <strong>{status}</strong>
        <br/>
        {message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClick}></button>
</div>

  );
}
export default function NumeroDisplay(props){
  return (
    <div style = {{
      display: 'flex',
      height:"80px",
      width:"80px",
      margin: "2px",
      borderRadius:"40px",
      backgroundColor:"#222",
      color:"#fff",
      justifyContent:"center",
      alignItems:"center",
      fontSize:"30px"
    }}>
      {props.numero}
    </div>
  )
}
export default function ContadorDisplay(props){
  return (
    <div style = {{
      display: 'flex',
      height:"200px",
      width:"200px",
      borderRadius:"100px",
      backgroundColor:"#222",
      color:"#fff",
      justifyContent:"center",
      alignItems:"center",
      fontSize:"20px"
    }}>
      {props.numero}
    </div>
  )
}
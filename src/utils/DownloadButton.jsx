

const DownloadButton = ({pdfUrl}) => {
    const handleButton=() =>{
        window.open(pdfUrl,"_blank")
    }
  return (
     <button 
               
              className="card-button" 
             onClick={handleButton}
            >
              Get Brochure
            </button>
  )
}

export default DownloadButton

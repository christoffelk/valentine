import Image from "next/image"

interface Props{
    imageName?: string;
    rotateDegree?: string;
    placement?: string
}
export default function Card(props: Props){
    return  <>
        <div style={{
           backgroundColor: "white",
           padding:16,
           width: 'fit-content',
           rotate: (props.rotateDegree || '-20deg'),
           boxShadow: '0 0 4px 4px',
           marginBottom: 16,
           display: "flex",
           justifyContent: props.placement || 'start'
        }}>
            <div style={{
                width:'180px',
            }}>
                <img src={props.imageName || "love.jpg"} ></img>
            </div>
        </div>
    </>
}
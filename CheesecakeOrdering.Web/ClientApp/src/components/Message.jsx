export default function Message({titleMessage, message}) {
    return <>
        <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div className="text-center">
                <h1 className="display-4">{titleMessage}</h1>
                <p className="lead">{message}</p>
            </div>
        </div>
    </>
}
export default function Progress() {
    return (
        <div className='progressTab'>
            <div className='progress'>
                <span className='progressBar'> tasks done</span>
            </div>
            <button className='removeBtn'>Remove checked</button>
        </div>
    );
};

interface ActivePanelProps {
    activePanels: boolean[];
}

function StateHeader ({ activePanels } : ActivePanelProps) {
    return (
        <div className="StateHeader">
            <p>{`State: Menu is ${activePanels[0] ? 'active' : 'inactive'} and grid is ${activePanels[1] ? 'active' : 'inactive'} `}</p>
        </div>
    );
}

export default StateHeader;
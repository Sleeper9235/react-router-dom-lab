import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    const mailbox = props.mailboxes.find((box) => box._id === +(mailboxId))

    if (!mailbox) {
        return (
            <>
                <h1>Mailbox Not Found!</h1>
            </>
        )
    } else {
        return (
            <>
                <h1>Mailbox {mailbox._id}</h1>
                <h3>Details</h3>
                <dl>
                    <dt>Boxholder:</dt>
                        <dd>
                            {mailbox.boxholder}
                        </dd>
                    <dt>Box Size:</dt>
                        <dd>
                            {mailbox.boxSize}
                        </dd>
                </dl>
                <h3>Letters</h3>
                <dl>
                    <dt>
                        {props.letters.map((letter, idx) => (
                            <div>
                                {+(letter.mailboxId) == mailbox._id ? (
                                <dd key={idx}>
                                    Dear, {letter.recipient}
                                    <br /><br />
                                    {letter.message}
                                </dd>
                                ) : (
                                   ''
                                )}
                            </div>
                        ))}
                    </dt>
                </dl>
            </>
        )
    }
}

export default MailboxDetails
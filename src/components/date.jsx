import { formatDistance } from "date-fns"; //formatta le date in modo "umano"
import { it } from "date-fns/locale"; //traduce le stringhe delle date in ita

const RelativeDate = ({date}) => (
    <p>
        <small>
            {formatDistance(new Date(date), new Date(), {addSuffix: true, locale: it})} - {new Date(date).toLocaleTimeString()}
        </small>
    </p>
);

export default RelativeDate;
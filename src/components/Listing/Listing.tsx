import { Item } from '../Item/index';

interface ListingProps {
  items: Item[],
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const renderPrice = (currencyCode: string, price: string) => {
    switch (currencyCode) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} ${currencyCode}`;
    }
  };

  const renderQuantityClass = (quantity: number) => {
    if (quantity <= 10) {
      return 'level-low';
    } else if (quantity <= 20) {
      return 'level-medium';
    } else {
      return 'level-high';
    }
  };

  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            {item.MainImage && item.MainImage.url_570xN ? (
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt={item.title || 'No title available'} />
              </a>
            ) : (
              <a href={item.url}>
                <img src="default_image_url" alt="No image available" />
              </a>
            )}
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title ? (item.title.length > 50 ? item.title.substring(0, 50) + '…' : item.title) : 'No title available'}
            </p>
            <p className="item-price">
              {renderPrice(item.currency_code, item.price)}
            </p>
            <p className={`item-quantity ${renderQuantityClass(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
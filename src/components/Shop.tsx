interface Props {
  handleAddToCart: (item: { name: string; price: number; img: string }) => void;
}

function Shop({ handleAddToCart }: Props) {
  const products = [
    {
      title: "SPECIAL OFFERS",
      productList: [
        {
          name: "Nike Low Tops",
          price: 100,
          img: "https://media-s3-us-east-1.ceros.com/editorial-content/images/2021/03/23/ab749c271da4be38a93302933d884473/1-1.jpg",
        },
        {
          name: "Nike High Tops",
          price: 100,
          img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Washed-Black-GS.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1685561974&q=75",
        },
        {
          name: "Air Jordans Low Tops",
          price: 100,
          img: "https://cdn.shopify.com/s/files/1/0933/1060/products/nike-dunk-low-sail-harvest-moon-dd1503-114.jpg?v=1644274118",
        },
        {
          name: "Air Jordans High Tops",
          price: 100,
          img: "data:image/jpeg;base64,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",
        },
      ],
    },
    {
      title: "ALL PRODUCTS",
      productList: [
        {
          name: "Nike Low Tops",
          price: 100,
          img: "https://media-s3-us-east-1.ceros.com/editorial-content/images/2021/03/23/ab749c271da4be38a93302933d884473/1-1.jpg",
        },
        {
          name: "Nike High Tops",
          price: 100,
          img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Washed-Black-GS.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1685561974&q=75",
        },
        {
          name: "Air Jordans Low Tops",
          price: 100,
          img: "https://cdn.shopify.com/s/files/1/0933/1060/products/nike-dunk-low-sail-harvest-moon-dd1503-114.jpg?v=1644274118",
        },
        {
          name: "Air Jordans High Tops",
          price: 100,
          img: "data:image/jpeg;base64,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",
        },
        {
          name: "Nike High Tops",
          price: 89,
          img: "https://images.51microshop.com/9013/product/20220820/_Nike_Dunk_Low_Brown_Veail_Sail_Vivid_Green_DV9108_711_1660984980179_0.jpg",
        },
        {
          name: "Nike Low Tops",
          price: 100,
          img: "https://media-s3-us-east-1.ceros.com/editorial-content/images/2021/03/23/ab749c271da4be38a93302933d884473/1-1.jpg",
        },
        {
          name: "Nike High Tops",
          price: 100,
          img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Washed-Black-GS.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1685561974&q=75",
        },
        {
          name: "Air Jordans Low Tops",
          price: 100,
          img: "https://cdn.shopify.com/s/files/1/0933/1060/products/nike-dunk-low-sail-harvest-moon-dd1503-114.jpg?v=1644274118",
        },
        {
          name: "Air Jordans High Tops",
          price: 100,
          img: "data:image/jpeg;base64,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",
        },
        {
          name: "Nike High Tops",
          price: 89,
          img: "https://images.51microshop.com/9013/product/20220820/_Nike_Dunk_Low_Brown_Veail_Sail_Vivid_Green_DV9108_711_1660984980179_0.jpg",
        },
        {
          name: "Nike Low Tops",
          price: 100,
          img: "https://media-s3-us-east-1.ceros.com/editorial-content/images/2021/03/23/ab749c271da4be38a93302933d884473/1-1.jpg",
        },
        {
          name: "Nike High Tops",
          price: 100,
          img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Washed-Black-GS.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1685561974&q=75",
        },
        {
          name: "Air Jordans Low Tops",
          price: 100,
          img: "https://cdn.shopify.com/s/files/1/0933/1060/products/nike-dunk-low-sail-harvest-moon-dd1503-114.jpg?v=1644274118",
        },
        {
          name: "Air Jordans High Tops",
          price: 100,
          img: "data:image/jpeg;base64,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",
        },
        {
          name: "Nike High Tops",
          price: 89,
          img: "https://images.51microshop.com/9013/product/20220820/_Nike_Dunk_Low_Brown_Veail_Sail_Vivid_Green_DV9108_711_1660984980179_0.jpg",
        },
        {
          name: "Nike Low Tops",
          price: 100,
          img: "https://media-s3-us-east-1.ceros.com/editorial-content/images/2021/03/23/ab749c271da4be38a93302933d884473/1-1.jpg",
        },
        {
          name: "Nike High Tops",
          price: 100,
          img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Washed-Black-GS.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1685561974&q=75",
        },
        {
          name: "Air Jordans Low Tops",
          price: 100,
          img: "https://cdn.shopify.com/s/files/1/0933/1060/products/nike-dunk-low-sail-harvest-moon-dd1503-114.jpg?v=1644274118",
        },
        {
          name: "Air Jordans High Tops",
          price: 100,
          img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhIYGBgZGhgYHBgaHB0cHBoaHBwZGhkaHBkcIy4lHR4rHxgcKDgoKy80NTU1GiQ7QDszPy41NTEBDAwMEA8QGBERGDUjGCE0NDQxNDQxPzExNDExNDQ0MTQ0NDExNDQ0OzE0NDE0NDQ0NDQ0MTE0NDE/Pz80PzQ1NP/AABEIAL0BCgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEMQAAIBAgMDCQUFBwIGAwAAAAECAAMRBCExBRJBBiIyUWFxgZGhE0KxwdEHFFKS8BZTYnKC0uEjQ0RUosLi8RUksv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAfEQEAAgMAAwEBAQAAAAAAAAAAAVECERIDEzFBUiH/2gAMAwEAAhEDEQA/APs0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERNVSqq6kC+nWe6BtiV1bGNcboFu3U24ZaSZRqhlDDQi/8AiBtiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICJqaqBx8BmfISJi0Zxa+6vblfvtn4ZQNWM2uqndQb7dmgmlcC751XI47qmxHEZ8CJCxCvTdUQooILb1rE8COJNrdfETxsRUXP2l+w5fr0gWDYctvLvWI9RnnNmAqqrmiDoAR2n3vHT1kHD1DWYc8oyg3sM2GRGfDXq4yfRwaIQwQlhc7xJJzyPxjYtImKtcXmUBERAREQEREBERAREQEREBERAREQEREBERATEm2cymjEnmn9awH3kTw4iQp4WkE01u0+k1tUHf3m8qq+0kX3rnqGZ9JAqbWdskWw6z+rSjoHxAA1AHlK/EbYQaEt3afmOUpmUtm7k9mv8Aj0m1FA4ePHzMaCrjmrN0Qu4bZ3uL2Nu3gerTOQtqYn2KoxpVaxd1SyC5TevzzncLlnnqRJhADXA6Qz7xp6H0E3LA10Kns3BHunzB9OOp6zOqesALkzlFRaih1qKVIyIzuM9LG3H4Sxw2LKC25c/iZrelsoF3ha29cZ5dfbJMpMNta7gMLA5Eg3A6vWXcBERAREQEREBERAREQEREBERAREQEREBERASDtTEqiXY6kAdp1+Ak6Uu326A/mPwA+cCsqbUc9BPE/Lh6yHULv038B/jT1m4zwZmwF+wcfKXQYPCKWzBKi1+86d3hLMUltlTG7qMlzGfX8Z77MEWVdzs49uXXwvNoGe9fLP8AWmXGER6FFLkinfvBy6+lkLdcjfdVUXdr/wAIy9dT4Sc75XOmZz1/Vx+rGVuIr3zJy4friYGmsBa44G/gNdey4mRcDUzS9a+QBN/M+EhYjD1iUUHcU5E6vYC45x007x1wrGvuLu0qYKEDdVKbFVQH3mVTYAcBx7b3FnydwaJSu5LkcXJY72fXxmnB7NVAQote921JJ456mS1qojinvgNbetfNQeJ7T+uEkifg8CpZiqgXN2NuPzNvKScDtW7tRqLuVEzA4OmVnTPMZ2I4HwJivtVFAVOHl4zQ+F33Ssw56HmbuRsRZkz1BGt+zqgdQDfMTKQsCxzU8Mx+v1rJsBERAREQEREBERAREQEREBERAREQEREBOd2oWdgwQ7oFuB4nOwJsNNZ0U4Lk7yuw1ZERqqpVACsj807wyO6Tk3hAk3m6liCosLW1lo9JW1Abv18xnIz7PXgSvqP14y7GlcWOK/ruN7eE8bFdS+JOc8bANwKnxt53y9ZHxOFcCwS57CD84GuviiTbU6dncANf/fVabsNs53zc2+P0El7LwIRQzDnkZ8d3+EWlgG6s5Bpw+ERNB48fORdoWDpfqPrlf5eMss+7u+sj4zCo62ORGYPEH4eEgpaeLqF3X2YQKQEcsCGUi5bdGYIOVj1TE4AHO4YnO7AFiePOM3Ns6sOjZh2m3obk+YmJWqvSpMe0Wt6En0lG7BJuOOgBnnYX8DbKbxtEB8lJRct7rbj5aX7T1SpqqlRkLF1amSQAxXpCxDLqV7SNRrJ9lVCDYKBnfS3beUTaW0Xe9k3QcrnU9Zy4SwwGPDCzZHQE2G+OBH64zn62MXcVE1YW/lTjc9ug8TwMkYRnYszJuIAAt+kc8yRwGQ85B1MSDg63MBLZcD1D5yUtRToQYGyIiAiIgIiICIiAiIgIiICIiAiIgR8YSEcg2O61j1GxsZ8j2lyUVi2QbeBFnvcGwClag6raceM+u4w8x/5W+BnJESj5ts/EbRwrKiVHW5Cqj8+mSTawfRQBnkR4TotlfaSQF+9YdkBsPaU+cl7cVOansuTOifDqeFvgewjq7JU7Q2Aj03pqNxWsTuW1B3r7hFuAyHnIOn2Xt3DYkXpVkf8Ahvzh3ocx5SyynxmvyR3GVgXKhhdqQO+tgRkC2V8ibAkWNraTdsrau0qVA1lxCVES29TqneYWA3hfJgRfQt1ZSD68WHZMhc8PPKfPdlfabSuBicO9EkA76jfQ9TaBrHsB0ncbN2xQxC71GsjjjusCR2Eag98CYE6z5T0ADQRFoAtF4tPbQOK2pypoLjHwuIp+zVdzcxF8rsoa7ZcwXNgcxlnaWRS16b2ZHUgHIq6EadWh07erTl+WGzadXatNHUMr4UlgbjMM4BBGYbt7JS8mtv8A3Z2wtdi+F3yiVL39g28yqQ1ugbHLvy1BD6VQw6IAqoFWwFgLZDITRXxalBTpta5Ivrax53qbeM9b2lPprvpwdATccLgXIPp2yOtWlztwKGZt5goFyb3Ja3E24yifTd2Uc/mXGWV7DtHG4/8AXDdUA3ripZgBawzzvY34eWciPT30ChyuYIYZ+9e2fWMpkqLTPtDck3vfjcWHlw+sC4p7XRQq1agDfiNlB7dcpaIwIBBBBzBGhHXOYO0EYOhTeXK5IuoOeWeptbzklsWaa33t1FF78AO7/EDoYlHsza++d1gQS1gbWOeS7w7T8dMiZeQEREBERAREQEREBERAREQIe02tSfut5kD5zmrTodtH/SPevxnOgyhaLT28XhGDoDqL/HznJcscGiU3qbvOC2JuQLFl57AasvDx04dfI2PS66fTxHHMCBwuykpV99UPQLum7TpsCu9lzXG8SbDK+XkJVbNwuGcFiaqVibo9HetdgXCIFBtkfIcJ9M2jyLwuJUVEU0XYBg9I7puesdEnvF5xeL5J4zCktTQVkBNmSy1FFiCCpBvlbrzzAHHKtexuVm0aS3H/ANlBa4qKS9iLghwAxBtqQ06jDfaTSU7mJw1bDsLXNt9RcAjSzaG/R0nJ7E2hh2rBHVKaqiUylYEsAtzYFgLHeJ6VsmyHCY4bHmjiKpSmjqH3bZ7mqqio5DboAU9h0zgfUMDyswVXoYylfqZwjflexkrFbew1Mbz4qio7XX0ANz4T402ylqVWJVWL1KqgU81Lo6lgq2B3LOLG/CSsNsWiKtNPYDfJcuhG5YMyBFVnPOUDfIOd7EZyjLbuL/8AkMY1dAfZBRRpkg3qFCHbmgFgDvHMDIEX4iersxHcIaebmtvoiWemhamUQB1Ft3M71hkD1ZTdqumHxSIQzIgG6oYJuh23iVZStlBQWvbiCbGatq12q4kVUV0TcpMGckWuXCNu73NQuQLDO4vbPODq/s+x7o9TZ1Y3ahzqTH3qRIsM+q4t2G3uzpttItlsq798jYXtxz7b28Z865K1HbatE7zMwot7RmZGuAjZjcNgu8y5fWfQ3qe0ct7q5L29vz/L1QI1PDBehzese6TxNuBPZ18Z7UUFSrqLHW+anx+tpMCCehJUaKKACwAA7BIb03KqKri4JO6lyGOi3uAbZ6W1OpymzaWKp00LFty2V11J4BVHTa4yFjxlRSpYnF9BTRpnUsT7QjQb1tLi/NBuOMK6vAFKiBiA26Su93a5jty8JZitwtK7Z2D9jTSmM90WGWXXmQMpLK2B4n1J0F7D5SCStQHjMpFCZAdXfn69cW1t193llKJcSIXtqbDtP+ZrOPQXu6+YPwgT4lS+11GgLHsU/O010Ns86zqFXgQbkd/ZAuomIN8xpMoCIiAiIgVm3D/p/wBQ+c57fEv9oO29kRkOPjxvIjObZ01Y9/1WUVW9G9LI7nGgPAL8jMAlE602X8/wBMIgXmNQXBH6vw9ZN9hRPvuPH6iPulM5LVz/AKT8LQPdgYm6FCc1N+2zZj1v6S24ypwuztx98VcswV3dQc9d7W4Esie2RULamwsPiRatRR+okZjubUeE5LGfZyqkvhsQ9MkFd1xvrY6rnzrHLUnTSd5ftEX7vOB8kxOx8dQdDUw3t0p7wX2JAsCVNgqhW1UGwU8RpKnbm1Q9cOQ9GwTKpvqwZd/MC62W5Gh7Z9ymqrhUcWamrd4BkHxJdooSantLuFpD/Udn3zcipfW6bpta/DTMyU+LD/6eFptXZilyiMCNyxRS7M1lFhkbDLWfWRsHDXv92p369xfpJZRaSHcp6DJUXU8BYCBxnJzYT0S9Su+/iqwAc6inTy5gtbM2FyOoDqnUoLCwkSkri7OG3mNzcH9fq3CbhUlRJEg47GkEIg3na9lvbvJPuqOJ8Bc2mOOxhRQFBLNkB1k6C/DrJ4AGMFRCAljd2sWbr6gvUo4D5kmUe4fZoF3c79QqRvnILcdFB7i+uWZMstnYhEXdJ3W1N+vIfACRTWExeqDqAe/OQTcTtEk7tMXPFjoPDj+tZHs51quT2Gw8ppFbqHlBqnqPlA3FD+8f808NJeNz3kzR7RzojH+k/SYlKh/228cvjA3FEHCYs6jgJq+61TwA72HyJgbPb3qijuu3xtA8evIVev2yTVoUl6dUnO2qrn1cZ4dwW3KO92kX9XNvKVVryYxu+jITcoRb+U6eRB8xL6clhMS6upICrvDIHgcjla3rOtkCIiAiIgVGO6Z8PhNEjbabELUZkp76GxFgSdACLA31B4cZT1NvumT0LHtJX0InTHCZj/GZyiProbTwzn05Up71Nx3EH42mScq6J91xw6I+RifHlH4dY2vpiVB1Epl5U4Y++w/ob5TNeU2GP+7/ANL/ANsnOVHUWs2wyHWmh71H0npoLpu+WXwlavKLDH/eHk30mQ5Q4b98vk30jjKjcWsfYjt8GI+BhaIGV2/O5+LStHKLDfvh5N9IHKXDfvfJX/tjnKjqLWYpWPSb8zfMxuH943mPmJU/tRhv3p/I/wBIHKjDfvD+VvpHGVHUWuCG4VGHgv8AbM95+D+YHylKOU2G/eH8pnp5SYfg5PcpjjKjqLXKVH41Af6f/KZCq+d3UjhzTl/1ZyjHKXD/AIz+UzF+U1DQMx7lPzjjL+ZOsbXbVql8qijrG5f/ALsoNd/xDxX/AMpzzcqaOgVz4AfEzX+1tH8D5dg+N+qX1ZUdY26QYipxKX7j9Zj95q59Ds1nOftbR/BUyy0X+6YHlfS4U3PD3f7o9WVHWNulbE1cs0tx1+ExfEVeDJ6zmhyvQi6028So+F5oflaeFJR3sT8AJqPFnP4neNuqNWpxqDwU/NprAfjUPgAPjece/Kaq2hUfygfO5mSVcTU0pVWv/C5HwtLHgn9nSeyPx07FQedVY9m8P+0AzQ9Sne+6Wt13P/6MrqOxsY2lLdHWxUel7+ksKPJPEN06yL/LvN8QJePHH3JOsp+QfewNAq+Q9BND4wfi8spc4fkig6dV27rKPmfWWFDYGHXSkD/MSfQm0nXjx+RtdZT9c/srDGs4svMUgsx0yz3b8SZ2swp0wAAAABoALAeEznLLLqWojT2IiZaIiICYMgIsQCOo5zOIFZX2Hhn6VBPBd31W0hNyRwZ/2bccnca/1S/iWMsrTUU5g8h8JwVxqcnPE343mn9gcLwaqMyekOJvxWdbEveVpqKcev2e4YaVK4zJ6S8TfinbPF+zzDDSrX1J6ScTf8E7GI7ys5hxyfZ7hhpUr6k9JeJv+DtnqfZ9hhpUrak9JeJv+HtnYxL7MrOYpxy/Z9hRo9bUnpLxN/w9syX7P8KCTv1s/wCId34Z10R3lZqKcqvITCi5vUz/AIh3dU2LyJwoN7Pn/F/idNEezOzmKc7+xmEvf2bcPfbh4zNeSODGfsbnLV34ae92y/iT2Zf0c40pl5MYQf8ADr5sfiY/ZjCf8snr9ZcxJ3NrqKUv7K4P/l182+syXkxhB/w1PylxEdZWailUvJzCDTC0vyi3lN1PY+HXo4akO5F+knxG5s1DXTpKNFA7gB8JsnsSKREQEREBERAREQP/2Q==",
        },
        {
          name: "Nike High Tops",
          price: 89,
          img: "https://images.51microshop.com/9013/product/20220820/_Nike_Dunk_Low_Brown_Veail_Sail_Vivid_Green_DV9108_711_1660984980179_0.jpg",
        },
      ],
    },
  ];

  return (
    <>
      {products.map((section, index) => (
        <div key={index} className="m-3 text-center">
          <h2>{section.title}</h2>
          <div className="row justify-content-around">
            {section.productList.map((item, index) => (
              <div
                key={index}
                className="card col-6 m-3"
                style={{ width: "18rem" }}
              >
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6>{item.price}$</h6>
                  <p className="card-text">
                    Unrivaled style, performance, and basketball heritage.
                    Elevate your game and make a statement on and off the court
                    with Nike Air Jordans.
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-dark"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Shop;

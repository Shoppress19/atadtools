import { useState, useEffect } from 'react'

function App() {
  // جلب البيانات المحفوظة من ذاكرة الهاتف عند فتح الصفحة
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("atad_data");
    return saved ? JSON.parse(saved) : [];
  });

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  // حفظ البيانات تلقائياً في كل مرة يتغير فيها القائمة
  useEffect(() => {
    localStorage.setItem("atad_data", JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if(newName && newPrice) {
      setProducts([...products, { id: Date.now(), name: newName, price: newPrice + " DH" }]);
      setNewName(""); setNewPrice("");
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div style={{ padding: '20px', direction: 'rtl', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#d32f2f', borderBottom: '2px solid' }}>ورشة AtadTools الرقمية</h2>
      
      <div style={{ background: '#eee', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <input placeholder="المنتج (مثلاً: Bosch)" value={newName} onChange={e => setNewName(e.target.value)} style={inputS} />
        <input placeholder="الثمن" value={newPrice} onChange={e => setNewPrice(e.target.value)} style={inputS} />
        <button onClick={addProduct} style={{ background: '#2e7d32', color: 'white', padding: '10px', width: '100%' }}>إضافة للمخزون</button>
      </div>

      <div style={{ display: 'grid', gap: '10px' }}>
        {products.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <span><strong>{item.name}</strong> - {item.price}</span>
            <button onClick={() => deleteProduct(item.id)} style={{ color: 'red', border: 'none', background: 'none' }}>حذف</button>
          </div>
        ))}
      </div>
    </div>
  )
}

const inputS = { padding: '10px', marginBottom: '10px', width: '94%', borderRadius: '5px', border: '1px solid #bbb' };

export default App


import "@styles/globals.css";

const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-black border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="footer__copyright">
          <small className="text-gray-400 mb-4 md:mb-0">© 2025 檀上珠宇. All rights reserved.</small>
        </div>
        <ul className="flex space-x-6">
          <li><a href="" className="text-gray-400 hover:text-white transition-colors text-sm">プライバシーポリシー</a></li>
          <li><a href="" className="text-gray-400 hover:text-white transition-colors text-sm">特定商取引法に基づく表記</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer ;
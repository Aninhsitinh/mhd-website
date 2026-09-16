/**
 * Structured project dossier content for high-end corporate presentation
 */
export interface ProjectDossierSection {
  title: string
  icon?: string
  content: string
  bullets?: string[]
  stats?: { label: string; value: string }[]
}

export interface ProjectDossier {
  overview: string
  sections: ProjectDossierSection[]
  conclusion?: string
}

export const PROJECT_DOSSIERS: Record<string, ProjectDossier> = {
  'du-an-dong-tang-long': {
    overview: 'Khu đô thị mới Đông Tăng Long toạ lạc tại vị trí chiến lược thuộc phường Trường Thạnh, TP. Thủ Đức (Quận 9 cũ), TP. Hồ Chí Minh do Tổng Công ty Đầu tư Phát triển Nhà và Đô thị (HUD) làm chủ đầu tư. Dự án sở hữu tổng quy mô quy hoạch 159,36 ha, bốn mặt tiếp giáp các trục giao thông huyết mạch gồm Vành đai 3, Nguyễn Duy Trinh, Lã Xuân Oai và đường Liên Phường, cách trung tâm TP.HCM 15 km và kết nối thuận lợi tam giác kinh tế trọng điểm Biên Hòa – Vũng Tàu – Nhơn Trạch.',
    sections: [
      {
        title: 'Quy hoạch & Vị trí liên vùng',
        icon: 'location',
        content: 'Dự án được định hướng trở thành khu đô thị sinh thái kiểu mẫu tại khu Đông TP.HCM, kết nối trực tiếp với tuyến cao tốc TP.HCM – Long Thành – Dầu Giây và sân bay quốc tế Long Thành.',
        bullets: [
          'Tổng diện tích đất quy hoạch: 159,36 ha với hồ điều hòa trung tâm 19 ha.',
          'Bốn mặt tiền đường trục lớn: Đường Vành đai 3 (lộ giới 120m), Nguyễn Duy Trinh (lộ giới 30m), Lã Xuân Oai (lộ giới 40m), Liên Phường (lộ giới 60m).',
          'Bán kính kết nối: 10 phút đến Khu Công nghệ cao TP.HCM, 15 phút đến Trung tâm Hành chính Thủ Thiêm.'
        ]
      },
      {
        title: 'Mục đích & Phạm vi thẩm định của MHD',
        icon: 'target',
        content: 'MHD Valuation được Tổng Công ty HUD tin tưởng chỉ định thực hiện công tác thẩm định giá trị tài sản đối với các phân khu đất thành phần, phục vụ trực tiếp kế hoạch kinh doanh và chuyển nhượng thị trường.',
        bullets: [
          'Thẩm định toàn diện cơ sở xác định giá bán lẻ đối với từng block biệt thự, nhà phố thương mại.',
          'Tư vấn xác lập khung giá bán buôn (bán sỉ) cho các nhà đầu tư thứ cấp và đối tác chiến lược.',
          'Đánh giá tác động của tiến độ hạ tầng Vành đai 3 đến biên độ tăng trưởng giá trị quyền sử dụng đất.'
        ]
      },
      {
        title: 'Phương pháp định giá & Giá trị tư vấn',
        icon: 'calculator',
        content: 'MHD đã kết hợp linh hoạt Phương pháp So sánh trực tiếp với Phương pháp Thặng dư (Residual Method) nhằm phản ánh trung thực tiềm năng khai thác theo quy hoạch 1/500 được phê duyệt.',
        stats: [
          { label: 'Quy mô diện tích', value: '159,36 ha' },
          { label: 'Chủ đầu tư', value: 'Tổng Công ty HUD' },
          { label: 'Phương pháp áp dụng', value: 'Thặng dư & So sánh' },
          { label: 'Cơ sở giá trị', value: 'Giá trị thị trường' }
        ]
      }
    ],
    conclusion: 'Kết quả thẩm định của MHD đã cung cấp cơ sở dữ liệu pháp lý và tài chính vững chắc, hỗ trợ Tổng Công ty HUD tối ưu hóa hiệu quả thương mại và đảm bảo tuân thủ nghiêm ngặt các quy định hiện hành về quản lý tài sản doanh nghiệp nhà nước.'
  },

  'van-phuc-reverside': {
    overview: 'Vạn Phúc Riverside (Van Phuc City) là đại đô thị sinh thái thương mại dịch vụ hàng đầu Đông Nam Á, tọa lạc tại bán đảo Hiệp Bình Phước, TP. Thủ Đức, TP. Hồ Chí Minh với quy mô lên đến 198 ha. Sở hữu vị trí độc tôn với 3 mặt giáp sông Sài Gòn dài 3,4 km, dự án tích hợp hệ sinh thái đẳng cấp gồm công viên nước Ocean World, bến du thuyền quốc tế và hồ cảnh quan Đại Nhật rộng 16 ha.',
    sections: [
      {
        title: 'Quy mô & Lợi thế địa thế bán đảo',
        icon: 'location',
        content: 'Nằm ngay mặt tiền Quốc lộ 13 kết nối trực tiếp với đại lộ Phạm Văn Đồng, cầu Bình Triệu và sân bay Tân Sơn Nhất chỉ trong 10 phút di chuyển.',
        bullets: [
          'Quy mô toàn khu: 198 ha với mật độ mặt nước và cây xanh hơn 60%.',
          'Đường bờ sông Sài Gòn dài 3,4 km ôm trọn toàn bộ bán đảo.',
          'Hồ Đại Nhật trung tâm rộng 16 ha và kênh Sông Trăng dài 2 km tạo trục cảnh quan độc bản.'
        ]
      },
      {
        title: 'Phạm vi nghiệp vụ của MHD',
        icon: 'target',
        content: 'MHD Valuation thực hiện công tác thẩm định định kỳ giá trị quyền sử dụng đất, công trình hạ tầng kỹ thuật và giá trị thương mại của các giai đoạn phát triển.',
        bullets: [
          'Thẩm định phục vụ mục đích tài trợ vốn tín dụng và thế chấp hạn mức bảo lãnh ngân hàng.',
          'Xác định giá trị đầu tư xây dựng các hạng mục tiện ích giải trí và dịch vụ bến du thuyền.',
          'Cung cấp báo cáo định giá chuyên sâu làm việc với các định chế tài chính và quỹ đầu tư.'
        ]
      },
      {
        title: 'Mô hình định giá & Tham số tài chính',
        icon: 'calculator',
        content: 'MHD áp dụng phương pháp Chiết khấu dòng tiền (DCF) kết hợp Phương pháp Thặng dư để xác định chính xác giá trị hiện tại ròng của dòng tiền phát triển dự án nhiều giai đoạn.',
        stats: [
          { label: 'Tổng diện tích', value: '198 ha' },
          { label: 'Đường ven sông', value: '3,4 km' },
          { label: 'Phương pháp áp dụng', value: 'DCF & Thặng dư' },
          { label: 'Đơn vị phát triển', value: 'Tập đoàn Vạn Phúc' }
        ]
      }
    ],
    conclusion: 'Báo cáo thẩm định của MHD là tài liệu cơ sở quan trọng giúp chủ đầu tư và các ngân hàng đối tác hoạch định phương án giải ngân, tài trợ hạ tầng an toàn và hiệu quả.'
  },

  'nha-may-dong-tau-shipyard': {
    overview: 'Shipyard là một trong những nhà máy đóng tàu trọng điểm và hiện đại hàng đầu tại Việt Nam, sở hữu khuôn viên rộng khoảng 7 ha tọa lạc tại khu vực Cảng Cát Lái, TP. Hồ Chí Minh, liền kề luồng hàng hải sông Sài Gòn. Đây là cơ sở chuyên dụng đóng mới và sửa chữa các loại tàu vận tải biển tải trọng lớn, tàu chuyên dụng công nghiệp.',
    sections: [
      {
        title: 'Hiện trạng cơ sở vật chất & Máy móc thiết bị',
        icon: 'location',
        content: 'Nhà máy trang bị đồng bộ hệ thống triền đà, ụ cẩu chân đế siêu trường siêu trọng, phân xưởng gia công vỏ tàu kim loại tấm tự động và hệ thống sơn phủ chống ăn mòn hàng hải công nghệ châu Âu.',
        bullets: [
          'Quy mô nhà máy: 7 ha mặt bằng cảng chuyên dụng ven luồng nước sâu.',
          'Hệ thống cẩu giàn sức nâng lớn, thiết bị cắt plasma CNC và máy uốn lượn vỏ tàu công suất cao.',
          'Cầu cảng xuất nhập phương tiện và trang thiết bị cơ giới chuyên dụng ven sông.'
        ]
      },
      {
        title: 'Nghiệp vụ thẩm định & Tiêu chuẩn HSBC',
        icon: 'target',
        content: 'MHD tiến hành thẩm định toàn bộ máy móc, dây chuyền thiết bị và phương tiện thi công phục vụ cấp hạn mức tín dụng và bảo lãnh thế chấp tại Ngân hàng Quốc tế HSBC.',
        bullets: [
          'Kiểm tra, xác minh hồ sơ kỹ thuật, xuất xứ hải quan và niên hạn sử dụng của hàng trăm danh mục máy móc có giá trị cao.',
          'Đáp ứng đầy đủ các tiêu chuẩn kiểm toán và thẩm tra rủi ro tài sản quốc tế khắt khe từ HSBC.',
          'Thu thập báo giá tham chiếu trực tiếp từ các hãng chế tạo thiết bị hàng hải quốc tế.'
        ]
      },
      {
        title: 'Phương pháp định giá',
        icon: 'calculator',
        content: 'Áp dụng kết hợp Phương pháp Chi phí thay thế (Cost Approach) có khấu trừ hao mòn vật chất/kinh tế và Phương pháp So sánh thị trường đối với các thiết bị vận tải chuyên dụng.',
        stats: [
          { label: 'Quy mô mặt bằng', value: '7 ha' },
          { label: 'Ngân hàng yêu cầu', value: 'HSBC Bank' },
          { label: 'Phương pháp áp dụng', value: 'Chi phí thay thế' },
          { label: 'Loại hình tài sản', value: 'Thiết bị hàng hải' }
        ]
      }
    ],
    conclusion: 'MHD đã bàn giao chứng thư và báo cáo định giá kịp thời, chuẩn xác, được HSBC chấp thuận tuyệt đối làm căn cứ giải ngân hạn mức tài trợ cho doanh nghiệp.'
  },

  'day-chuyen-san-xuat-van-mdf': {
    overview: 'Nhà máy chế biến gỗ MDF Long Việt là dự án công nghiệp trọng điểm của tỉnh Đắk Nông, tọa lạc trên khu đất 6,5 ha tại huyện Đắk Song, dọc trục Quốc lộ 14 huyết mạch kết nối vùng Tây Nguyên. Nhà máy đóng vai trò hạt nhân trong chuỗi liên kết tiêu thụ sản phẩm rừng trồng của địa phương.',
    sections: [
      {
        title: 'Đặc tính dây chuyền công nghệ',
        icon: 'location',
        content: 'Dây chuyền sản xuất ván sợi mật độ trung bình (MDF) sử dụng thiết bị đồng bộ nhập khẩu từ các thương hiệu hàng đầu châu Âu và Trung Quốc với năng lực vận hành tự động hóa cao.',
        bullets: [
          'Hệ thống máy băm dăm gỗ, máy nghiền sợi, nồi hấp áp suất và buồng sấy sợi liên tục.',
          'Dây chuyền ép nóng liên tục nhiều tầng với hệ thống điều khiển PLC tự động.',
          'Dây chuyền mài bóng, cắt khổ tiêu chuẩn và đóng gói thành phẩm.'
        ]
      },
      {
        title: 'Phạm vi & Thách thức thẩm định',
        icon: 'target',
        content: 'MHD chịu trách nhiệm đánh giá toàn diện giá trị còn lại của hệ thống dây chuyền đã qua lắp đặt vận hành, phục vụ mục đích tái cơ cấu nguồn vốn và mở rộng hạn mức sản xuất.',
        bullets: [
          'Khảo sát trực tiếp tại hiện trường tỉnh Đắk Nông, đo kiểm tình trạng hao mòn cơ học và hiệu suất nhiệt của các thiết bị chính.',
          'Thẩm tra danh mục linh kiện thay thế và chi phí phụ tùng chính hãng phục vụ bảo dưỡng định kỳ.',
          'Phân tích chi phí lắp đặt, móng máy và chi phí chạy thử nghiệm thu bàn giao.'
        ]
      },
      {
        title: 'Phương pháp tiếp cận',
        icon: 'calculator',
        content: 'MHD đã vận dụng Phương pháp Chi phí tái tạo và chi phí thay thế, kết hợp với thu thập dữ liệu báo giá linh kiện chuyên ngành gỗ công nghiệp.',
        stats: [
          { label: 'Diện tích nhà máy', value: '6,5 ha' },
          { label: 'Vị trí địa bàn', value: 'Đắk Nông (QL14)' },
          { label: 'Phương pháp áp dụng', value: 'Chi phí tái tạo' },
          { label: 'Đối tượng thẩm định', value: 'Dây chuyền MDF' }
        ]
      }
    ],
    conclusion: 'Kết quả định giá của MHD mang lại bức tranh tài chính trung thực và rõ ràng về tài sản cố định của nhà máy, là cơ sở cho các tổ chức tài chính phê duyệt kế hoạch vốn an toàn.'
  },

  'la-veranda-resort': {
    overview: 'La Veranda Resort Phú Quốc là khu nghỉ dưỡng boutique 5 sao sang trọng thuộc Công ty Liên doanh TNHH Khu du lịch Veranda, đi vào vận hành từ năm 2006 và là thành viên danh giá của chuỗi MGallery by Sofitel (Tập đoàn Accor). Tọa lạc bên bãi biển Trần Hưng Đạo đẹp nhất đảo Ngọc, khu nghỉ mang phong cách kiến trúc Đông Dương (Indochine) thuộc địa cổ điển quý phái.',
    sections: [
      {
        title: 'Đẳng cấp kiến trúc & Dịch vụ lưu trú',
        icon: 'location',
        content: 'Khu nghỉ dưỡng sở hữu cảnh quan nhiệt đới xanh mát với hệ thống phòng nghỉ và biệt thự sang trọng hướng biển, kèm theo các tiện ích đẳng cấp chuẩn quốc tế.',
        bullets: [
          'Hệ thống biệt thự biển và phòng nghỉ nội thất gỗ quý mang phong cách Pháp - Đông Dương.',
          'Tổ hợp nhà hàng ẩm thực cao cấp, spa thư giãn ven biển và hồ bơi ngoài trời sát mép sóng.',
          'Được quản trị và vận hành bởi AccorHotels theo tiêu chuẩn thương hiệu MGallery.'
        ]
      },
      {
        title: 'Nghiệp vụ thẩm định M&A Doanh nghiệp',
        icon: 'target',
        content: 'MHD Valuation thực hiện định giá toàn diện giá trị doanh nghiệp và tài sản bất động sản nghỉ dưỡng phục vụ mục đích chuyển nhượng vốn góp và hợp tác chiến lược quốc tế.',
        bullets: [
          'Đánh giá giá trị hữu hình: Quyền thuê đất ven biển, hạ tầng kiến trúc xây dựng và trang thiết bị nội thất cao cấp.',
          'Đánh giá giá trị vô hình: Thương hiệu, lợi thế hợp đồng quản lý vận hành với Accor và cơ sở dữ liệu khách hàng quốc tế.',
          'Dự báo dòng tiền kinh doanh khách sạn (ADR, RevPAR, Occupancy Rate) dựa trên xu hướng du lịch Phú Quốc.'
        ]
      },
      {
        title: 'Mô hình chiết khấu dòng tiền',
        icon: 'calculator',
        content: 'MHD áp dụng Phương pháp Thu nhập thông qua mô hình Chiết khấu dòng tiền tự do (FCFF), kết hợp phương pháp chi phí đối với tài sản vật chất hiện hữu.',
        stats: [
          { label: 'Phân khúc', value: 'Boutique 5 Sao' },
          { label: 'Thương hiệu quản lý', value: 'MGallery (Accor)' },
          { label: 'Phương pháp áp dụng', value: 'Thu nhập DCF' },
          { label: 'Mục đích', value: 'M&A Doanh nghiệp' }
        ]
      }
    ],
    conclusion: 'Hồ sơ thẩm định do MHD phát hành đáp ứng các tiêu chuẩn khắt khe về định giá tài sản khách sạn nghỉ dưỡng quốc tế, tạo tiền đề thuận lợi cho thương vụ M&A thành công tốt đẹp.'
  },

  'gia-tri-doanh-nghiep-cong-ty-co-phan-dau-tu-phat-trien-khong-gian-ngam': {
    overview: 'Công ty Cổ phần Đầu tư – Phát triển Không gian Ngầm (IUS) là doanh nghiệp tiên phong tại Việt Nam trong lĩnh vực khai phá và xây dựng không gian thương mại ngầm đô thị. Dự án trọng điểm của công ty là Tổ hợp bãi đậu xe ngầm và dịch vụ thương mại tại Công viên Lê Văn Tám, trung tâm Quận 1, TP. Hồ Chí Minh.',
    sections: [
      {
        title: 'Tầm vóc & Ý nghĩa dự án',
        icon: 'location',
        content: 'Dự án ngầm tại Công viên Lê Văn Tám được quy hoạch nhằm giải quyết bài toán giao thông tĩnh và bãi đỗ xe cho khu vực trung tâm tài chính quận 1, đồng thời kiến tạo một không gian mua sắm giải trí hiện đại dưới lòng đất.',
        bullets: [
          'Vị trí chiến lược: Tiếp giáp 4 tuyến đường trung tâm Hai Bà Trưng, Điện Biên Phủ, Võ Thị Sáu và Phan Liêm.',
          'Quy mô thiết kế nhiều tầng ngầm kỹ thuật hiện đại theo tiêu chuẩn quốc tế.',
          'Dự án nhận được sự quan tâm đặc biệt của các quỹ đầu tư hạ tầng trong và ngoài nước.'
        ]
      },
      {
        title: 'Nhiệm vụ thẩm định của MHD',
        icon: 'target',
        content: 'MHD tiến hành thẩm định giá trị doanh nghiệp để xác định giá trị cổ phần của công ty, phục vụ mục đích chuyển nhượng cổ phần và thu hút nguồn vốn hợp tác đầu tư triển khai dự án.',
        bullets: [
          'Rà soát toàn bộ hồ sơ pháp lý giao đất ngầm, giấy chứng nhận đầu tư và quy hoạch chuyên ngành của TP.HCM.',
          'Đánh giá giá trị các chi phí chuẩn bị đầu tư, chi phí tư vấn quốc tế và thiết kế kỹ thuật ngầm đã thực hiện.',
          'Xác định phần giá trị gia tăng lớn nhất bắt nguồn từ quyền sử dụng khu đất vàng tại Công viên Lê Văn Tám.'
        ]
      },
      {
        title: 'Phương pháp định giá',
        icon: 'calculator',
        content: 'MHD áp dụng Phương pháp Tài sản (Asset-based approach) kết hợp đánh giá hiện tại hóa giá trị tiềm năng quyền phát triển dự án.',
        stats: [
          { label: 'Địa điểm dự án', value: 'Quận 1, TP.HCM' },
          { label: 'Loại hình', value: 'Không gian ngầm đô thị' },
          { label: 'Phương pháp', value: 'Phương pháp Tài sản' },
          { label: 'Mục đích', value: 'Chuyển nhượng M&A' }
        ]
      }
    ],
    conclusion: 'Báo cáo thẩm định của MHD đã phản ánh chính xác tiềm năng vượt trội của dự án không gian ngầm, bảo vệ quyền lợi cổ đông và tạo tiếng nói đồng thuận giữa các bên trong đàm phán hợp tác vốn.'
  },

  'day-chuyen-san-xuat-bot-mi': {
    overview: 'InterFlour Việt Nam là công ty trực thuộc Tập đoàn InterFlour – một trong những tập đoàn sản xuất và kinh doanh bột mì hàng đầu Đông Nam Á. Để tạo ra những dòng sản phẩm bột mì cao cấp cho thị trường, nhà máy tại Khu công nghiệp Cái Mép (bên bờ sông Thị Vải, Bà Rịa - Vũng Tàu) được đầu tư dây chuyền hiện đại bậc nhất thế giới.',
    sections: [
      {
        title: 'Quy mô dây chuyền & Cầu cảng nước sâu',
        icon: 'location',
        content: 'Nhà máy được tích hợp giữa công nghệ xay xát bột mì hàng đầu châu Âu và hệ thống logistics cảng biển nước sâu chuyên dụng.',
        bullets: [
          'Công suất chế biến cực lớn: 1.000 tấn ngũ cốc / 24 giờ liên tục.',
          'Dây chuyền thiết bị tự động hóa đến từ các thương hiệu lừng danh như Buhler (Thụy Sĩ), Toledo (Mỹ/Đức).',
          'Cầu cảng chuyên dụng cho phép tiếp nhận tàu biển trọng tải lớn bốc dỡ nguyên liệu thô trực tiếp vào silo chứa.'
        ]
      },
      {
        title: 'Phạm vi nghiệp vụ của MHD',
        icon: 'target',
        content: 'MHD thực hiện công tác định giá toàn bộ hệ thống dây chuyền công nghệ xay nghiền bột mì cùng toàn bộ hệ thống máy móc bốc dỡ hàng hải tại cầu cảng Cái Mép.',
        bullets: [
          'Khảo sát chi tiết cụm silo bảo quản, hệ thống hút thổi khí nén, dây chuyền nghiền cán trục Buhler và hệ thống đóng bao tự động.',
          'Kiểm tra định kỳ tỷ lệ hao mòn thiết bị trong môi trường ven sông biển có hơi ẩm mặn.',
          'Phục vụ mục đích thu xếp hạn mức tín dụng và cơ cấu lại tài sản đảm bảo tại ngân hàng.'
        ]
      },
      {
        title: 'Phương pháp tiếp cận',
        icon: 'calculator',
        content: 'Áp dụng Phương pháp Chi phí thay thế, đối chiếu báo giá trực tiếp từ tập đoàn chế tạo Buhler Thụy Sĩ và các chỉ số giá máy móc nhập khẩu của Tổng cục Hải quan.',
        stats: [
          { label: 'Công suất thiết kế', value: '1.000 Tấn/Ngày' },
          { label: 'Vị trí', value: 'KCN Cái Mép' },
          { label: 'Công nghệ chế tạo', value: 'Buhler (Thụy Sĩ)' },
          { label: 'Cơ sở hạ tầng', value: 'Kèm cầu cảng nước sâu' }
        ]
      }
    ],
    conclusion: 'Chứng thư thẩm định do MHD phát hành đã phản ánh khách quan giá trị hiện đại của tổ hợp dây chuyền bột mì, được đối tác ngân hàng tài trợ tín dụng phê duyệt thuận lợi.'
  },

  'day-chuyen-san-xuat-xi-mang-mo-khoang-san': {
    overview: 'Nhà máy Xi măng Phúc Sơn (tỉnh Hải Dương) là một trong những nhà máy sản xuất xi măng có công suất lớn nhất tại Việt Nam với 2 dây chuyền hiện đại có tổng công suất đạt 3,6 triệu tấn/năm. Để đảm bảo nguồn nguyên liệu bền vững, nhà máy được quy hoạch gắn liền với các mỏ đá vôi và đá sét trữ lượng lớn tại địa phương.',
    sections: [
      {
        title: 'Quy mô tổ hợp công nghiệp nặng',
        icon: 'location',
        content: 'Tổ hợp công trình công nghiệp trị giá hàng ngàn tỷ đồng với các hạng mục siêu kết cấu và dây chuyền nhiệt luyện clinker quy mô đồ sộ.',
        bullets: [
          '2 dây chuyền sản xuất đồng bộ tổng công suất 3,6 triệu tấn xi măng/năm.',
          'Thiết bị, máy nghiền đứng, lò quay và hệ thống lọc bụi tĩnh điện nhập khẩu từ Đức và các nhà chế tạo uy tín.',
          'Hệ thống khai trường và quyền khai thác các mỏ khoáng sản đá vôi nguyên liệu dài hạn.'
        ]
      },
      {
        title: 'Thách thức & Giải pháp chuyên môn của MHD',
        icon: 'target',
        content: 'Quy mô nhà máy hết sức rộng lớn với khối lượng tài sản phức tạp, hồ sơ pháp lý kỹ thuật đồ sộ đòi hỏi sự chuyên sâu cao từ đội ngũ thẩm định viên MHD.',
        bullets: [
          'Liên hệ trực tiếp với các nhà sản xuất, cung ứng thiết bị tại Đức và Trung Quốc để thu thập dữ liệu báo giá linh kiện chính xác.',
          'Áp dụng Phương pháp Thu nhập (Income Approach) để đánh giá giá trị quyền khai thác các mỏ đá dựa trên trữ lượng và đơn giá khai thác thương mại.',
          'Áp dụng Phương pháp Chi phí để đánh giá chuẩn xác giá trị còn lại của 2 dây chuyền sản xuất sau nhiều năm vận hành.'
        ]
      },
      {
        title: 'Phương pháp định giá',
        icon: 'calculator',
        content: 'Kết hợp hài hòa giữa Phương pháp Thu nhập (đối với mỏ khoáng sản) và Phương pháp Chi phí (đối với hệ thống dây chuyền công nghệ).',
        stats: [
          { label: 'Công suất vận hành', value: '3,6 triệu tấn/năm' },
          { label: 'Dây chuyền', value: '02 dây chuyền Đức/TQ' },
          { label: 'Địa bàn', value: 'Tỉnh Hải Dương' },
          { label: 'Tài sản kèm theo', value: 'Mỏ đá vôi nguyên liệu' }
        ]
      }
    ],
    conclusion: 'Báo cáo thẩm định công nghiệp nặng của MHD đã chứng minh năng lực vượt trội của công ty trong việc thẩm định các tổ hợp sản xuất quy mô hàng ngàn tỷ đồng, đáp ứng hoàn hảo yêu cầu quản trị tài sản của doanh nghiệp.'
  }
}

export function getProjectDossier(slug?: string): ProjectDossier | null {
  if (!slug) return null
  return PROJECT_DOSSIERS[slug] || null
}

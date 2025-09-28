const symptomData = {
        "Kepala": {
          "question": "Apakah sakit kepala Anda disertai dengan demam, leher kaku, atau kebingungan?",
          "answers": [
            {
              "text": "Ya, saya mengalami demam tinggi, leher kaku, dan merasa sangat bingung.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Meningitis: Peradangan selaput pelindung otak dan sumsum tulang belakang.</li><li>Ensefalitis: Peradangan pada otak itu sendiri.</li><li>Tetanus: Infeksi bakteri serius yang menyebabkan kejang dan kaku otot, termasuk leher.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Infeksi bakteri, virus, atau jamur; trauma atau cedera kepala serius; komplikasi dari infeksi di area tubuh lain seperti pneumonia atau infeksi telinga; paparan racun tertentu."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Segera cari bantuan medis darurat (ER/UGD). Ini adalah kondisi serius. Ikuti petunjuk dokter secara ketat, biasanya akan melibatkan rawat inap, antibiotik atau antivirus intravena, dan istirahat total. Jangan mencoba mengobati sendiri."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Jalani vaksinasi yang dianjurkan (seperti Hib, Pneumokokus, Meningokokus, Tetanus), jaga kebersihan pribadi yang ketat (mencuci tangan), hindari kontak dekat dengan orang yang sakit, dan pastikan luka terbuka segera dibersihkan dan dirawat."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Makanan lunak dan mudah dicerna seperti sup kaldu ayam (kaya elektrolit), pisang (sumber energi dan kalium), air kelapa (menghidrasi dan elektrolit), serta banyak minum air putih."
                }
              ]
            },
            {
              "text": "Tidak, hanya sakit kepala yang terasa seperti tekanan di sekitar kepala.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Sakit Kepala Tegang (Tension Headache): Tipe sakit kepala paling umum, terasa seperti pita ketat di sekeliling kepala.</li><li>Migrain: Sakit kepala sedang hingga parah, seringkali berdenyut, dan bisa disertai mual atau sensitif terhadap cahaya.</li><li>Sakit Kepala Cluster: Sakit kepala parah yang muncul dalam siklus atau 'cluster'.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Stres, ketegangan otot di leher dan bahu akibat postur buruk atau kerja berlebihan, kurang tidur, dehidrasi, pola makan yang tidak teratur, atau paparan cahaya/suara terang/keras."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Lakukan kompres hangat atau dingin pada dahi atau leher, pijat ringan pada area tegang, konsumsi obat pereda nyeri non-resep seperti parasetamol atau ibuprofen. Beristirahat di ruangan gelap dan tenang juga bisa membantu."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Lakukan olahraga secara teratur untuk mengurangi stres, pastikan tidur cukup 7-8 jam setiap malam, kelola stres dengan teknik relaksasi, dan pertahankan postur tubuh yang baik saat bekerja."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Almond (sumber magnesium), bayam (magnesium dan riboflavin), ikan salmon (asam lemak omega-3), dan pastikan asupan air yang cukup."
                }
              ]
            },
            {
              "text": "Sakit kepala saya sering muncul saat saya sedang sangat stres atau cemas.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Sakit Kepala Tipe Tegang Kronis: Dipicu atau diperburuk oleh faktor psikologis.</li><li>Gangguan Kecemasan (Anxiety Disorder): Ketegangan otot kronis adalah gejala umum.</li><li>Stres Akut atau Burnout: Kelelahan fisik dan mental yang ekstrim.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Tekanan emosional atau psikologis yang tinggi, kelelahan akibat beban kerja atau tanggung jawab berlebih, kurangnya aktivitas fisik yang melepaskan endorfin, atau masalah tidur kronis."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Lakukan latihan pernapasan dalam atau meditasi secara teratur, coba sesi yoga atau tai chi, mendengarkan musik yang menenangkan, atau melakukan aktivitas yang Anda nikmati untuk mengalihkan pikiran."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Atur waktu untuk istirahat dan hobi, batasi konsumsi kafein dan alkohol yang dapat meningkatkan kecemasan, dan habiskan waktu di alam terbuka (misalnya, berjalan-jalan di taman)."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Teh chamomile (memiliki efek menenangkan), cokelat hitam (antioksidan dan dapat meningkatkan mood), biji-bijian utuh (membantu menjaga kadar gula darah stabil), dan makanan kaya vitamin B."
                }
              ]
            }
          ]
        },
        "Mata": {
          "question": "Apakah mata Anda terasa gatal, berair, kemerahan, atau mengalami gangguan penglihatan?",
          "answers": [
            {
              "text": "Ya, mata saya gatal, berair, dan sangat merah setelah terpapar debu atau serbuk sari.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Konjungtivitis Alergi (Mata Merah Alergi): Peradangan konjungtiva akibat alergi.</li><li>Blefaritis: Peradangan pada kelopak mata, seringkali di tepi.</li><li>Konjungtivitis Infeksi (Mata Merah): Akibat infeksi virus atau bakteri, biasanya sangat menular.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Paparan alergen (serbuk sari, debu, bulu hewan), infeksi virus (paling umum) atau bakteri, penggunaan lensa kontak yang tidak bersih atau kadaluarsa, atau sindrom mata kering."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Kompres dingin pada mata untuk mengurangi gatal dan bengkak, gunakan tetes mata antihistamin atau air mata buatan, dan hindari menyentuh atau menggosok mata sama sekali (untuk mencegah penyebaran infeksi)."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Cuci tangan secara teratur dan benar, hindari pemicu alergi yang diketahui, ganti sarung bantal secara rutin, dan hindari berbagi kosmetik mata."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Wortel (tinggi beta-karoten/vitamin A), alpukat (vitamin E), ikan berlemak (Omega-3, membantu mata kering). Semua baik untuk kesehatan mata secara umum."
                }
              ]
            },
            {
              "text": "Tidak, hanya penglihatan saya yang buram dan sulit melihat jauh.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Miopi (Rabun Jauh): Sulit melihat objek jarak jauh dengan jelas.</li><li>Astigmatisme: Penglihatan buram atau berbayang pada semua jarak.</li><li>Katarak: Kekeruhan pada lensa mata, seringkali terkait usia.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Kelelahan mata akibat penggunaan layar gadget berlebihan (ketegangan akomodatif), faktor genetik, proses penuaan normal, atau paparan sinar UV yang berlebihan tanpa pelindung."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Istirahatkan mata dengan aturan 20-20-20 (setiap 20 menit, lihat objek sejauh 20 kaki selama 20 detik), gunakan kacamata atau lensa kontak dengan resep yang tepat, dan segera konsultasi dengan dokter mata untuk pemeriksaan komprehensif."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Batasi waktu penggunaan layar dan pastikan pencahayaan memadai, gunakan kacamata hitam dengan perlindungan UV saat berada di luar ruangan, dan jaga pola tidur yang teratur."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Ubi jalar (beta-karoten), telur (lutein, zeaxanthin, vitamin E), beri-berian (antioksidan), dan makanan kaya seng (zinc)."
                }
              ]
            },
            {
              "text": "Mata saya merah, sangat nyeri, dan sensitif terhadap cahaya terang.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Uveitis: Peradangan pada lapisan tengah mata (uvea), bisa menyebabkan kerusakan mata permanen.</li><li>Keratitis: Peradangan kornea, seringkali akibat infeksi.</li><li>Glaukoma Sudut Tertutup Akut: Peningkatan tekanan mata yang tiba-tiba dan berbahaya. Kondisi darurat medis!</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Infeksi (bakteri, virus, jamur), penyakit autoimun, cedera mata serius, atau penggunaan lensa kontak yang tidak higienis dan berlebihan."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Hindari cahaya terang (gunakan kacamata hitam), dan yang paling penting, segera ke dokter mata atau unit gawat darurat. Gunakan hanya obat tetes mata yang diresepkan oleh dokter spesialis."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Jaga kebersihan lensa kontak secara ekstrem, gunakan pelindung mata saat bekerja dengan bahan kimia atau alat berbahaya, dan periksa mata secara rutin terutama jika ada riwayat glaukoma di keluarga."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Sayuran hijau gelap (kaya lutein dan zeaxanthin), minyak zaitun (anti-inflamasi), jeruk dan buah citrus (vitamin C, untuk pembuluh darah mata)."
                }
              ]
            }
          ]
        },
        "Mulut & Gigi": {
          "question": "Apakah nyeri pada mulut atau gigi Anda terjadi saat makan atau minum sesuatu yang panas, dingin, atau manis?",
          "answers": [
            {
              "text": "Ya, sangat sakit dan ngilu tajam saat makan/minum yang ekstrem suhunya.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Gigi Sensitif (Dentin Hipersensitivitas): Nyeri tajam singkat akibat terbukanya lapisan dentin.</li><li>Gigi Berlubang (Karies): Kerusakan pada enamel hingga mencapai lapisan gigi yang lebih dalam.</li><li>Abses Gigi: Infeksi bakteri pada akar gigi atau di antara gusi.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Email gigi yang terkikis akibat sikat gigi terlalu keras atau konsumsi asam, gigi berlubang yang tidak dirawat, retakan kecil pada gigi, atau akar gigi yang terbuka (resesi gusi)."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Gunakan pasta gigi khusus untuk gigi sensitif, hindari makanan/minuman yang terlalu panas, dingin, atau asam, dan segera kunjungi dokter gigi untuk menentukan akar masalahnya."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Sikat gigi dua kali sehari dengan sikat berbulu lembut, gunakan benang gigi setiap hari, dan kurangi konsumsi makanan manis atau asam yang dapat mengikis enamel."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Susu dan produk susu (kaya kalsium dan fosfat), keju (meningkatkan pH mulut), sayuran renyah seperti seledri (membantu membersihkan gigi secara alami)."
                }
              ]
            },
            {
              "text": "Tidak, nyeri terasa berdenyut, terus-menerus, dan tidak hilang.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Periodontitis (Penyakit Gusi Lanjut): Infeksi gusi parah yang merusak tulang penyangga gigi.</li><li>Pulpitis Irreversibel: Peradangan pada pulpa (saraf) gigi yang tidak bisa sembuh sendiri.</li><li>Gigi Pecah atau Retak Parah: Kerusakan struktural gigi yang mengekspos saraf.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Infeksi bakteri yang meluas dari lubang atau cedera, kebersihan mulut yang sangat buruk yang menyebabkan penumpukan plak dan karang gigi, atau cedera/trauma pada gigi."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Kunjungi dokter gigi segera karena ini bisa menjadi kondisi darurat. Dokter mungkin merekomendasikan perawatan akar (root canal), pencabutan gigi, atau antibiotik. Minum obat pereda nyeri sesuai anjuran saja."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Sikat gigi dan gunakan benang gigi secara rutin dan benar, periksa gigi setiap 6 bulan sekali, dan hindari menggigit benda keras (es, pulpen, atau permen keras)."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Yogurt tanpa gula (probiotik), ikan tuna atau sarden (omega-3 dan vitamin D), dan air mineral yang membantu produksi air liur yang baik."
                }
              ]
            },
            {
              "text": "Gusi saya bengkak, merah, berdarah saat menyikat gigi, dan terasa sakit.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Gingivitis (Radang Gusi): Tahap awal penyakit gusi, dapat pulih.</li><li>Periodontitis: Tahap lanjut gingivitis, dapat menyebabkan gigi goyang dan tanggal.</li><li>Sariawan (Canker Sore): Luka terbuka yang menyakitkan, seringkali di pipi atau gusi.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Penumpukan plak dan karang gigi di sepanjang garis gusi, kekurangan vitamin C atau nutrisi lain, perubahan hormon (kehamilan), atau merokok."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Kumur dengan air garam hangat beberapa kali sehari, tingkatkan kebersihan mulut (sikat gigi dan benang gigi dengan lembut), dan periksa ke dokter gigi untuk pembersihan karang gigi profesional."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Sikat gigi dua kali sehari dan gunakan benang gigi setiap hari, konsumsi makanan kaya vitamin C dan K, hindari merokok dan produk tembakau lainnya."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Jeruk dan buah citrus (vitamin C), brokoli (vitamin C dan K), teh hijau (antioksidan yang mengurangi peradangan gusi)."
                }
              ]
            }
          ]
        },
        "THT": {
          "question": "Apakah Anda mengalami hidung tersumbat/berair, bersin, dan sakit tenggorokan, atau nyeri telinga?",
          "answers": [
            {
              "text": "Ya, sepertinya saya flu: hidung tersumbat, bersin, dan badan pegal-pegal.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Influenza (Flu): Infeksi virus yang menyerang sistem pernapasan, gejala lebih parah dari pilek.</li><li>Pilek (Common Cold): Infeksi virus ringan pada hidung dan tenggorokan.</li><li>Sinusitis Akut: Peradangan pada rongga sinus, seringkali menyertai atau mengikuti pilek/flu.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Paparan virus influenza, rhinovirus, atau parainfluenza, perubahan cuaca yang drastis, atau kurangnya sistem kekebalan tubuh yang lemah."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Perbanyak istirahat total, minum banyak cairan (terutama air hangat dan teh herbal), konsumsi obat flu (dekongestan dan pereda demam) sesuai dosis, dan hirup uap hangat (misalnya dari baskom air panas)."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Vaksinasi flu tahunan, cuci tangan secara teratur dan menyeluruh, hindari menyentuh wajah, dan jaga jarak dari orang yang jelas-jelas sakit."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Sup kaldu ayam (melegakan hidung tersumbat), madu (meredakan batuk dan sakit tenggorokan), jahe (sifat anti-inflamasi dan menghangatkan tubuh)."
                }
              ]
            },
            {
              "text": "Tidak, saya hanya merasa nyeri parah di salah satu atau kedua telinga.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Otitis Media (Infeksi Telinga Tengah): Umum pada anak-anak, sering terjadi setelah pilek.</li><li>Otitis Eksterna (Infeksi Saluran Telinga Luar / Swimmer's Ear): Infeksi akibat air yang terperangkap.</li><li>Meniere's Disease: Gangguan telinga dalam yang menyebabkan vertigo, tinitus, dan gangguan pendengaran.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Infeksi bakteri atau virus (paling sering), masuknya air ke telinga dan tidak kering, perubahan tekanan udara (misalnya saat terbang), atau penumpukan kotoran telinga yang keras."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Kompres hangat pada telinga yang sakit, gunakan obat pereda nyeri non-resep, dan segera ke dokter THT jika nyeri parah atau keluar cairan. Hindari membersihkan telinga dengan cotton bud."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Keringkan telinga setelah berenang atau mandi, jangan gunakan cotton bud atau benda lain untuk membersihkan telinga, dan hindari paparan suara keras yang berkepanjangan."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Bawang putih (sifat antibakteri alami), kunyit (anti-inflamasi kuat), ikan salmon (omega-3 untuk mengurangi peradangan)."
                }
              ]
            },
            {
              "text": "Saya merasa sakit parah saat menelan dan tenggorokan sangat perih.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Faringitis (Radang Tenggorokan): Peradangan bagian belakang tenggorokan, seringkali virus.</li><li>Tonsilitis (Amandel): Peradangan amandel, bisa karena bakteri (Strep Throat) atau virus.</li><li>Laringitis: Peradangan pita suara, menyebabkan suara serak atau hilang.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Infeksi virus (paling umum) atau bakteri (memerlukan antibiotik), iritasi akibat asap rokok atau polusi udara, alergi, atau penggunaan suara yang berlebihan."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Berkumur dengan air garam hangat beberapa kali sehari, konsumsi makanan dan minuman yang lembut dan hangat (hindari yang pedas/asam), dan istirahatkan pita suara (jangan berteriak atau berbisik)."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Hindari makanan dan minuman yang terlalu panas, pedas, atau asam saat tenggorokan sensitif, jaga hidrasi tubuh (minum cukup air), dan hindari merokok atau berada di sekitar perokok."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Kaldu hangat (menenangkan dan menghidrasi), es krim atau es loli (meredakan nyeri sementara), teh madu lemon (melegakan tenggorokan dan vitamin C)."
                }
              ]
            }
          ]
        },
        "Pencernaan": {
          "question": "Apakah Anda sering merasa kembung, mual setelah makan, atau mengalami perubahan pola BAB?",
          "answers": [
            {
              "text": "Ya, saya sering merasa kembung, mual, dan ada rasa terbakar di dada setelah makan.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>GERD (Penyakit Asam Lambung): Aliran balik asam lambung ke kerongkongan.</li><li>Dispepsia (Gangguan Pencernaan): Perasaan tidak nyaman atau nyeri di perut bagian atas.</li><li>Sindrom Iritasi Usus (IBS): Gangguan usus kronis yang menyebabkan kembung, nyeri, dan diare/sembelit.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Makan terlalu cepat atau porsi besar, konsumsi makanan berlemak, pedas, bersoda, atau asam secara berlebihan, stres dan kecemasan, atau berat badan berlebih."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Makan porsi kecil tapi sering, hindari makanan yang memicu gejala (catat pemicunya), dan lakukan olahraga ringan secara teratur untuk membantu pencernaan. Gunakan antasida jika diperlukan."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Kunyah makanan perlahan dan nikmati proses makan, hindari berbaring segera setelah makan (beri jeda 2-3 jam), dan kelola stres dengan baik (misalnya dengan meditasi)."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Jahe (meredakan mual), pepaya (mengandung enzim pencernaan papain), nasi putih (mudah dicerna), dan oatmeal (menyerap asam lambung)."
                }
              ]
            },
            {
              "text": "Tidak, saya mengalami diare yang sangat sering dan encer.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Gastroenteritis (Flu Perut): Infeksi usus yang menyebabkan muntah dan diare.</li><li>Intoleransi Makanan (misalnya Laktosa): Ketidakmampuan mencerna zat makanan tertentu.</li><li>Kolitis (Radang Usus): Peradangan pada usus besar.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Infeksi virus, bakteri, atau parasit (keracunan makanan), konsumsi makanan yang tidak cocok, atau efek samping dari obat-obatan tertentu (misalnya antibiotik)."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Minum banyak cairan dan oralit untuk mencegah dehidrasi, konsumsi obat anti-diare non-resep jika diperlukan, dan segera ke dokter jika diare tidak membaik dalam 2 hari atau disertai demam tinggi/darah."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Jaga kebersihan makanan dan minuman (masak sampai matang), cuci tangan sebelum makan dan setelah dari toilet, hindari makanan mentah atau yang dijual di tempat yang tidak higienis."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Terapkan diet BRAT (Banana, Rice, Applesauce, Toast): Nasi, pisang, air kelapa (elektrolit), dan makanan tawar (roti panggang)."
                }
              ]
            },
            {
              "text": "Saya merasa nyeri tajam dan terpusat di perut bagian bawah kanan.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Apendisitis (Radang Usus Buntu): Peradangan pada usus buntu, seringkali dimulai dari nyeri di pusar lalu pindah ke kanan bawah. Kondisi darurat!</li><li>Infeksi Saluran Kemih (ISK): Infeksi bakteri di saluran kemih, sering disertai nyeri saat buang air kecil.</li><li>Hernia: Penonjolan organ melalui dinding otot.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Infeksi bakteri, penumpukan kotoran di usus buntu, sumbatan pada saluran kemih, atau ketegangan otot abdomen yang parah."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Jangan mengonsumsi obat pereda nyeri atau laksatif tanpa saran dokter (ini bisa menutupi gejala apendisitis). Segera periksakan diri ke dokter atau UGD. Kompres hangat dapat membantu meredakan nyeri ringan."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Konsumsi makanan kaya serat untuk menjaga kelancaran BAB, minum air yang cukup, hindari mengangkat beban terlalu berat dengan teknik yang salah."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Yogurt probiotik (menjaga kesehatan usus), blueberry (antioksidan), air (hidrasi sangat penting), dan makanan kaya serat larut."
                }
              ]
            }
          ]
        },
        "Pernapasan": {
          "question": "Apakah Anda mengalami batuk yang tidak kunjung sembuh atau disertai sesak napas?",
          "answers": [
            {
              "text": "Ya, disertai sesak napas, bunyi 'mengi', dan batuk saat malam atau setelah beraktivitas.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Asma: Peradangan saluran napas yang menyebabkan penyempitan (bronkospasme).</li><li>Bronkitis Akut/Kronis: Peradangan saluran pernapasan utama (bronkus).</li><li>PPOK (Penyakit Paru Obstruktif Kronis): Kerusakan paru-paru jangka panjang, sering pada perokok.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Alergi atau paparan iritan (debu, asap rokok), infeksi virus atau bakteri yang berulang, faktor genetik, atau riwayat merokok/paparan polusi udara."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Gunakan inhaler atau nebulizer sesuai resep dokter, hindari pemicu alergi atau iritan, dan cari bantuan medis darurat jika sesak napas parah dan tidak merespons pengobatan biasa."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Hindari merokok dan asap rokok, jalani vaksinasi flu dan pneumonia tahunan, gunakan masker saat berada di lingkungan berpolusi atau berdebu, dan rutin berolahraga ringan."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Jahe (membantu membuka saluran napas), brokoli (tinggi antioksidan sulforaphane), bawang putih (anti-inflamasi alami), dan makanan kaya vitamin D."
                }
              ]
            },
            {
              "text": "Hanya batuk kering yang menggelitik dan terkadang sakit di tenggorokan.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Batuk Kering Post-nasal Drip (Lendir Menetes dari Hidung): Lendir mengiritasi tenggorokan.</li><li>Laringitis: Peradangan pada kotak suara (laring).</li><li>Efek Samping Obat-obatan Tertentu (misalnya ACE Inhibitor).</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Alergi atau paparan debu, asap, dan polusi, naiknya asam lambung (GERD), infeksi virus ringan yang baru sembuh, atau udara kering."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Minum air hangat atau teh herbal dengan madu (sangat efektif), gunakan pelembap udara (humidifier) di kamar tidur, dan hindari berbicara berlebihan atau berteriak."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Jaga hidrasi tubuh dengan baik, hindari paparan asap rokok dan polusi, tidur dengan posisi kepala yang sedikit lebih tinggi (untuk penderita GERD)."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Sup (melegakan), madu (agen anti-batuk alami), lemon (vitamin C dan melegakan tenggorokan), dan permen pelega tenggorokan."
                }
              ]
            },
            {
              "text": "Batuk saya berdahak tebal, berwarna kuning atau hijau, dan disertai demam.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Pneumonia (Paru-paru Basah): Infeksi parah yang menyebabkan kantung udara terisi cairan/nanah.</li><li>Bronkitis Akut (Infeksi Bakteri): Peradangan bronkus dengan produksi lendir.</li><li>Tuberkulosis (TBC): Infeksi bakteri kronis pada paru-paru.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Infeksi bakteri (paling sering jika dahak berwarna), virus, atau jamur, paparan asap rokok dalam jangka panjang, atau sistem kekebalan tubuh yang lemah."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Segera konsultasi ke dokter untuk diagnosis dan mungkin memerlukan antibiotik atau obat-obatan lain sesuai resep. Minum banyak cairan untuk mengencerkan dahak, dan istirahat total."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Vaksinasi pneumonia (terutama untuk lansia), hindari merokok sepenuhnya, cuci tangan secara rutin dan gunakan etika batuk/bersin yang benar (tutup dengan siku)."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Jahe (ekspektoran alami), nanas (mengandung bromelain yang membantu mengencerkan dahak), makanan kaya protein (untuk pemulihan jaringan)."
                }
              ]
            }
          ]
        },
        "Kulit": {
          "question": "Apakah ada ruam, gatal-gatal, atau pertumbuhan yang tidak biasa di kulit Anda?",
          "answers": [
            {
              "text": "Ya, ruam kemerahan, sangat gatal, dan kadang bersisik atau melepuh.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Dermatitis Kontak Alergi/Iritan: Reaksi kulit terhadap zat tertentu (misalnya deterjen, nikel).</li><li>Eksim (Dermatitis Atopik): Kondisi kronis yang menyebabkan kulit kering, gatal, dan meradang.</li><li>Urtikaria (Biduran): Ruam gatal yang timbul tiba-tiba seperti bekas gigitan nyamuk, seringkali akibat alergi makanan/obat.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Paparan alergen (misalnya makanan, kosmetik), stres emosional, perubahan suhu yang ekstrem, atau masalah pada fungsi penghalang kulit (skin barrier)."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Hindari pemicu alergi yang sudah diketahui, gunakan krim pelembap bebas pewangi secara rutin, konsumsi antihistamin untuk mengurangi gatal, dan gunakan kompres dingin."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Gunakan produk perawatan kulit yang lembut dan hipoalergenik, lakukan tes alergi jika sering kambuh, dan jaga kelembapan kulit dengan mandi air hangat (bukan panas) singkat."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Ikan salmon dan makarel (omega-3, anti-inflamasi), kenari (asam lemak esensial), alpukat (lemak sehat dan vitamin E), dan banyak minum air."
                }
              ]
            },
            {
              "text": "Muncul benjolan seperti jerawat besar, merah, sakit, dan bernanah di wajah atau badan.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Jerawat Kistik/Nodul: Jenis jerawat parah, benjolan meradang di bawah permukaan kulit.</li><li>Folikulitis: Peradangan pada folikel rambut akibat infeksi bakteri/jamur.</li><li>Abses Kulit (Bisul): Kumpulan nanah di bawah kulit akibat infeksi bakteri.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Produksi minyak (sebum) berlebih, infeksi bakteri *Propionibacterium acnes*, perubahan hormon (pubertas, menstruasi), atau gesekan/tekanan pada kulit."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Jangan memencet jerawat atau bisul (risiko infeksi menyebar dan jaringan parut), gunakan produk perawatan kulit yang mengandung asam salisilat atau benzoil peroksida, dan kunjungi dokter kulit untuk pengobatan resep."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Cuci muka dua kali sehari dengan lembut, hindari makanan dengan indeks glikemik tinggi, jaga kebersihan handuk dan sarung bantal (ganti rutin), dan hindari menyentuh wajah dengan tangan."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Buah beri (antioksidan), teh hijau (anti-inflamasi), air mineral (hidrasi), dan makanan rendah gula serta produk susu rendah lemak."
                }
              ]
            },
            {
              "text": "Ada benjolan, bintik, atau tahi lalat yang ukurannya membesar atau berubah bentuk/warna.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Kutil (Verruca): Pertumbuhan kulit kecil yang disebabkan oleh virus HPV.</li><li>Moluskum Kontagiosum: Infeksi virus yang menyebabkan bintik kecil seperti mutiara.</li><li>Kanker Kulit (Melanoma atau Karsinoma): Pertumbuhan sel kulit abnormal yang ganas. Perlu pemeriksaan!</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Infeksi virus (HPV, MCV), paparan sinar matahari berlebihan (sinar UV), faktor genetik, atau sistem kekebalan tubuh yang lemah."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Kunjungi dokter kulit (dermatolog) segera terutama jika benjolan berubah warna, bentuk, atau berdarah. Jangan mencoba menghilangkan benjolan sendiri. Dokter mungkin akan merekomendasikan cryotherapy (pembekuan) atau biopsi."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Gunakan tabir surya (minimal SPF 30) setiap hari, hindari paparan sinar matahari berlebihan (terutama pukul 10 pagi - 4 sore), dan lakukan pemeriksaan mandiri (perhatikan aturan ABCDE tahi lalat)."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Tomat (mengandung likopen, anti-kanker), wortel (beta-karoten), paprika (vitamin C dan antioksidan), dan makanan yang kaya vitamin D."
                }
              ]
            }
          ]
        },
        "Otot & Sendi": {
          "question": "Apakah Anda merasakan nyeri atau kekakuan pada otot atau sendi, terutama setelah beraktivitas?",
          "answers": [
            {
              "text": "Ya, nyeri pada sendi (lutut/pinggul) yang memburuk setelah berjalan atau berolahraga.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Osteoartritis (OA): Penyakit sendi degeneratif akibat keausan tulang rawan.</li><li>Bursitis: Peradangan pada bursa (kantong cairan) yang melindungi sendi.</li><li>Tendonitis: Peradangan pada tendon yang menghubungkan otot ke tulang.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Penggunaan sendi berlebihan (olahraga berat), cedera lama yang tidak sembuh sempurna, proses penuaan alami, atau kelebihan berat badan yang membebani sendi."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Istirahat yang cukup untuk sendi yang sakit, kompres dingin atau hangat pada area sakit, lakukan peregangan ringan (jangan berlebihan), dan gunakan obat pereda nyeri topikal atau oral."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Pemanasan sebelum olahraga dan pendinginan sesudahnya, hindari gerakan repetitif yang membebani sendi yang sama, dan jaga berat badan ideal untuk mengurangi tekanan pada lutut dan pinggul."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Ikan salmon (anti-inflamasi kuat), ceri (mengandung antosianin yang mengurangi peradangan), brokoli (kaya vitamin K dan sulforaphane)."
                }
              ]
            },
            {
              "text": "Tidak, tapi otot saya kaku, sakit, dan sering kram tanpa cedera jelas.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Mialgia (Nyeri Otot): Nyeri otot umum, seringkali akibat ketegangan.</li><li>Fibromyalgia: Gangguan kronis yang ditandai nyeri muskuloskeletal yang meluas dan kelelahan.</li><li>Kram Otot Malam Hari: Kontraksi otot yang menyakitkan saat istirahat.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Kelelahan otot yang berlebihan, dehidrasi parah, kekurangan mineral penting (seperti magnesium, kalium, kalsium), atau kurang tidur."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Pijat ringan pada otot yang tegang, kompres hangat (atau mandi air hangat), dan minum air yang cukup sepanjang hari untuk hidrasi optimal."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Peregangan rutin sebelum dan sesudah berolahraga, minum air yang cukup, dan konsumsi makanan kaya magnesium dan kalium (penting untuk fungsi otot)."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Bayam (magnesium dan zat besi), ubi jalar (kalium), alpukat (kalium dan magnesium), serta makanan kaya protein."
                }
              ]
            },
            {
              "text": "Nyeri sendi disertai bengkak, kemerahan, terasa hangat, dan sering di sendi kecil (jari/kaki).",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Rheumatoid Arthritis (RA): Penyakit autoimun yang menyerang sendi (sendi kecil lebih dulu).</li><li>Gout (Asam Urat): Peradangan sendi akut akibat penumpukan kristal asam urat.</li><li>Infeksi Sendi (Septic Arthritis): Infeksi serius pada sendi yang memerlukan perawatan segera.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Reaksi autoimun (RA), pola makan kaya purin (Gout), atau cedera/infeksi bakteri pada sendi (Infeksi Sendi)."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Segera periksa ke dokter (reumatolog/internis) untuk diagnosis dan pengobatan. Kompres dingin untuk meredakan bengkak akut, dan hindari makanan pemicu asam urat tinggi (jika didiagnosis Gout)."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Jaga berat badan yang sehat, konsumsi air yang cukup (untuk gout), hindari makanan kaya purin (daging merah, jeroan, alkohol), dan ikuti terapi reumatologi jika menderita RA."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Stroberi dan beri-berian (antioksidan, mengurangi asam urat), jahe (anti-inflamasi), biji rami (omega-3), dan makanan rendah purin."
                }
              ]
            }
          ]
        },
        "Jantung & Darah": {
          "question": "Apakah Anda merasa nyeri dada, sesak napas, atau mengalami gejala jantung/sirkulasi lainnya?",
          "answers": [
            {
              "text": "Ya, nyeri dada terasa berat atau menusuk, menyebar ke lengan/leher, dan disertai sesak napas.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Angina Pektoris: Nyeri dada akibat berkurangnya aliran darah ke otot jantung.</li><li>Serangan Jantung (Infark Miokard): Sumbatan total aliran darah ke bagian otot jantung. Kondisi darurat!</li><li>Emboli Paru: Sumbatan pembuluh darah paru-paru, juga kondisi darurat.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Penumpukan plak (aterosklerosis) di arteri koroner, gaya hidup tidak sehat (merokok, diet buruk), hipertensi (tekanan darah tinggi) kronis, atau adanya bekuan darah."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Segera cari bantuan medis darurat (telepon ambulans), berbaring dan usahakan rileks. Ikuti instruksi darurat medis. Minum obat yang diresepkan untuk kondisi jantung (misalnya Nitrogliserin) jika sudah memilikinya."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Hindari merokok sepenuhnya, konsumsi makanan rendah lemak jenuh, gula, dan garam, berolahraga secara teratur minimal 30 menit sehari, dan kelola tekanan darah serta kolesterol."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Ikan salmon dan ikan berlemak lainnya, alpukat (lemak tak jenuh tunggal), tomat (kalium), dan makanan tinggi serat larut (oatmeal, kacang-kacangan)."
                }
              ]
            },
            {
              "text": "Tidak, tapi saya merasa sangat mudah lelah, pusing, dan pucat.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Anemia (Kurang Darah): Kekurangan sel darah merah atau hemoglobin.</li><li>Hipotensi (Tekanan Darah Rendah): Tekanan darah yang terlalu rendah.</li><li>Kekurangan Vitamin B12 atau Folat: Penting untuk pembentukan sel darah merah.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Kekurangan zat besi, vitamin B12, atau folat dalam diet, kehilangan darah (misalnya menstruasi berat), dehidrasi, atau masalah penyerapan nutrisi."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Konsumsi makanan kaya zat besi dan vitamin B12, minum air yang cukup untuk mengatasi dehidrasi/hipotensi, dan segera kunjungi dokter untuk tes darah lengkap (cek Hb, Ferritin, dll)."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Konsumsi suplemen zat besi/B12 jika direkomendasikan dokter, makan makanan seimbang dari semua kelompok nutrisi, dan jaga hidrasi tubuh secara konsisten."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Daging merah dan hati (zat besi heme), bayam dan sayuran hijau (zat besi non-heme dan folat), kacang-kacangan dan biji-bijian (zat besi, B12, folat)."
                }
              ]
            },
            {
              "text": "Saya sering merasakan detak jantung yang cepat, tidak teratur, atau 'berdebar-debar'.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Palpitasi Jantung (umum): Perasaan jantung berdebar/bergetar.</li><li>Takikardia Supraventrikular (SVT): Detak jantung yang sangat cepat dan teratur, berasal dari bagian atas jantung.</li><li>Fibrilasi Atrium (AFib): Detak jantung tidak teratur (aritmia) yang meningkatkan risiko stroke.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Stres dan kecemasan yang parah, konsumsi kafein, alkohol, atau nikotin berlebihan, kondisi jantung yang mendasari, atau gangguan tiroid (hipertiroid)."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Kurangi konsumsi kafein dan alkohol, lakukan teknik pernapasan dalam atau 'Valsalva maneuver' untuk menenangkan jantung, dan segera ke dokter jika disertai nyeri dada, pingsan, atau sesak napas yang parah."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Kelola stres melalui olahraga atau hobi, tidur cukup 7-8 jam per malam, batasi konsumsi stimulan (kafein, energy drink), dan periksa fungsi tiroid Anda."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Oatmeal (tinggi serat), pisang (kalium), ikan salmon (omega-3 untuk irama jantung), dan makanan rendah gula."
                }
              ]
            }
          ]
        },
        "Lainnya": {
          "question": "Apakah Anda merasa lemas, demam, nyeri tubuh tanpa gejala spesifik lainnya, atau mengalami kebingungan?",
          "answers": [
            {
              "text": "Ya, saya merasa lemas luar biasa dan demam yang tidak jelas sumbernya.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Infeksi Virus Umum: Seperti mononukleosis atau infeksi virus yang belum teridentifikasi.</li><li>Kelelahan Kronis (Chronic Fatigue Syndrome): Kelelahan parah yang tidak membaik dengan istirahat.</li><li>Typhoid (Demam Tifoid): Infeksi bakteri serius yang menyebabkan demam tinggi berkepanjangan.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Infeksi virus atau bakteri, kurang istirahat yang berkepanjangan, sistem kekebalan tubuh yang lemah, atau stres fisik/psikologis yang ekstrim."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Perbanyak istirahat total, minum banyak cairan (terutama jika demam), konsumsi obat penurun demam sesuai petunjuk, dan kunjungi dokter untuk tes darah (misalnya cek Widal untuk Tifoid)."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Cuci tangan secara rutin dan benar, konsumsi makanan bergizi lengkap, hindari kontak dekat dengan orang yang sakit, dan jaga kebersihan lingkungan."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Bubur atau makanan sangat lunak, sup sayuran (kaya nutrisi dan mudah dicerna), air kelapa (elektrolit), dan makanan tinggi kalori dan protein jika nafsu makan kurang."
                }
              ]
            },
            {
              "text": "Saya merasa nyeri di seluruh otot dan sendi tubuh (body aches), disertai rasa tidak enak badan.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Mialgia (Nyeri Otot Umum): Seringkali gejala awal flu atau infeksi sistemik.</li><li>Fibromyalgia: Kondisi nyeri kronis yang meluas, disertai titik-titik nyeri spesifik.</li><li>Infeksi Virus Akut: Banyak virus (misalnya Dengue, Chikungunya, Flu) menyebabkan nyeri sendi/otot yang parah.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Kelelahan otot yang ekstrim, infeksi virus atau bakteri yang menyebabkan reaksi imun tubuh, atau kurang tidur yang menyebabkan pemulihan otot terganggu."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Kompres hangat pada area yang nyeri, pijat ringan atau gunakan balsem, minum air yang cukup, dan istirahat. Jika demam tinggi/tidak membaik, segera ke dokter."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Lakukan peregangan rutin, pastikan tidur cukup dan berkualitas, dan hindari aktivitas fisik yang terlalu berat tanpa persiapan (pemanasan/pendinginan)."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Jahe dan kunyit (sifat anti-inflamasi alami), ikan salmon (omega-3), dan makanan yang kaya vitamin D dan C."
                }
              ]
            },
            {
              "text": "Saya bingung, merasa sangat cemas, dan tidak yakin dengan gejala saya.",
              "result": [
                {
                  "title": "Penyakit yang Mungkin Diderita",
                  "content": "<ul><li>Kondisi Psikosomatik: Gejala fisik yang dipicu oleh stres, kecemasan, atau depresi.</li><li>Efek Samping Obat: Reaksi tubuh terhadap obat-obatan resep atau non-resep.</li><li>Anemia Ringan/Kekurangan Nutrisi: Dapat menyebabkan gejala kabur, kelelahan, dan pusing.</li></ul>"
                },
                {
                  "title": "Penyebab",
                  "content": "Stres, kecemasan, atau depresi yang tidak terkelola, reaksi tubuh terhadap obat baru atau dosis tinggi, atau kekurangan nutrisi penting."
                },
                {
                  "title": "Cara Mengatasi",
                  "content": "Lakukan relaksasi dan meditasi (berlatih *mindfulness*), kunjungi dokter untuk konsultasi dan pengecekan fisik menyeluruh, pertimbangkan konsultasi dengan profesional kesehatan mental (psikolog/psikiater)."
                },
                {
                  "title": "Cara Mencegah",
                  "content": "Jaga kesehatan mental dan fisik secara holistik, konsumsi makanan seimbang dan bervariasi, dan konsultasi dengan profesional jika kecemasan mengganggu kehidupan sehari-hari."
                },
                {
                  "title": "Makanan yang Dianjurkan",
                  "content": "Bayam (magnesium dan folat), telur (kolin dan vitamin D), alpukat (lemak sehat untuk otak), dan hindari gula berlebihan."
                }
              ]
            }
          ]
        }
      };
    
      const slide1 = document.getElementById('slide1');
      const popup = document.getElementById('popup');
      const modalTitle = popup.querySelector('.modal-title');
      const modalQuestion = popup.querySelector('#modal-question');
      const answerButtonsContainer = popup.querySelector('#answer-buttons');
      const modalResult = popup.querySelector('#modal-result');
    
      popup.addEventListener('show.bs.modal', event => {
        slide1.classList.add('d-none');
        const card = event.relatedTarget;
        const symptom = card.getAttribute('data-symptom');
        const data = symptomData[symptom];
    
        modalResult.classList.add('d-none');
        answerButtonsContainer.innerHTML = '';
        modalQuestion.classList.remove('d-none');
    
        modalTitle.textContent = symptom;
        modalQuestion.textContent = data.question;
    
        data.answers.forEach(answer => {
          const button = document.createElement('button');
          button.classList.add('btn', 'btn-primary', 'fs-5', 'answer-btn', 'mt-2', 'w-100');
          button.textContent = answer.text;
          button.addEventListener('click', () => {
            modalQuestion.classList.add('d-none');
            answerButtonsContainer.classList.add('d-none');
            
            modalResult.innerHTML = `
              <div class="d-flex flex-wrap justify-content-center p-2 pt-0">
                <div class="katadokter col-8 mt-0 mb-3 pe-3" style="background-image: url('/Assets/dokterbanyak.png'); background-position: 50% 50%; background-size: cover;"></div>
                ${answer.result.map(item => `
                  <div class="col-12 mb-3 card">
                    <div class="card-body kotakhasil">
                      <h5 class="card-title fw-bold">${item.title}</h5>
                      <p class="card-text">${item.content}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            `;
            modalResult.classList.remove('d-none');
          });
          answerButtonsContainer.appendChild(button);
    });
  });

  popup.addEventListener('hidden.bs.modal', event => {
    slide1.classList.remove('d-none');
    modalQuestion.classList.remove('d-none');
    answerButtonsContainer.classList.remove('d-none');
    modalResult.classList.add('d-none');
    modalResult.textContent = '';
  });
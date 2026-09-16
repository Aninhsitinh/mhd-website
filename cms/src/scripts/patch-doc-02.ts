// @ts-nocheck
import 'dotenv/config'
import payload from 'payload'
import configPromise from '../payload.config'

async function patchDoc02() {
  const config = await configPromise
  await payload.init({ config })

  console.log('--- Checking & patching doc 02 signature if needed ---')
  const res = await payload.find({
    collection: 'documents',
    where: {
      slug: {
        equals: 'tieu-chuan-tham-dinh-gia-viet-nam-so-02'
      }
    }
  })

  if (res.docs.length > 0) {
    const doc = res.docs[0]
    let html = doc.contentHtml || ''
    if (html.includes('Lưu: VT; QLG (VT,CSG).</span></td>') && !html.includes('Trần Văn Hiếu')) {
      const signCell = `<td valign="top" width="285">
<p align="center"><b><span lang="NL">KT. BỘ TRƯỞNG<br />
THỨ TRƯỞNG</span></b></p>
<p align="center">Trần Văn Hiếu</p>
</td>`
      html = html.replace('Lưu: VT; QLG (VT,CSG).</span></td>', `Lưu: VT; QLG (VT,CSG).</span></td>\n${signCell}`)
      await payload.update({
        collection: 'documents',
        id: doc.id,
        data: {
          contentHtml: html
        }
      })
      console.log('Successfully patched doc 02 with missing signature cell!')
    } else {
      console.log('Doc 02 already has signature or structure differs.')
    }
  }

  process.exit(0)
}

patchDoc02().catch(console.error)

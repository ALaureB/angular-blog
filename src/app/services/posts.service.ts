import { Post } from '../models/Post.model';

export class PostsService {

  posts = [
    // tslint:disable-next-line:max-line-length
    new Post('Quare hoc quidem praeceptum', 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet; illud potius praecipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare inciperemus eum, quem aliquando odisse possemus. Quin etiam si minus felices in diligendo fuissemus, ferendum id Scipio potius quam inimicitiarum tempus cogitandum putabat.', 4, Date.now()),
    // tslint:disable-next-line:max-line-length
    new Post('Quanta autem vis amicitiae sit', 'Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.', -2, Date.now()),
    // tslint:disable-next-line:max-line-length
    new Post('Abusus enim multitudine', 'Abusus enim multitudine hominum, quam tranquillis in rebus diutius rexit, ex agrestibus habitaculis urbes construxit multis opibus firmas et viribus, quarum ad praesens pleraeque licet Graecis nominibus appellentur, quae isdem ad arbitrium inposita sunt conditoris, primigenia tamen nomina non amittunt, quae eis Assyria lingua institutores veteres indiderunt.', 8, Date.now())
  ];

  likePost(i: number) {
    this.posts[i].loveIts++;
    console.log(this.posts[i].loveIts);
  }

  unlikePost(i: number) {
    this.posts[i].loveIts--;
    console.log(this.posts[i].loveIts);
  }

}

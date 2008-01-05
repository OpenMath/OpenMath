<?xml version="1.0" encoding="utf-8"?>
<mcd>
  <MMLdefinition id="cds_determinant" cdrole="application" arity="1">
        <name>determinant</name>
        <description>
          <p>The "determinant" of a matrix.  This is a unary function.  See CRC Standard
          Mathematical Tables and Formulae, editor: Dan Zwillinger, CRC Press Inc., 1996,
          [2.5.4].</p>
        </description>
	<discussion>
	  <p>The <el>determinant</el> element is the operator for constructing the
	  determinant of a matrix.</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4110.gif" alt="\det A"/>
	</rendering>
	<optype>unary function</optype>
	<signature>(matrix)-> scalar</signature>

        <MMLexample>
	  <![CDATA[<apply><determinant/>
  <ci type="matrix"> A </ci>
</apply>]]></MMLexample>
      </MMLdefinition>
      
      <MMLdefinition id="cds_transpose"  cdrole="application" arity="1">
        <name>transpose</name>
        <description>
          <p>The transpose of a matrix or vector.  See CRC Standard Mathematical Tables
          and Formulae, editor: Dan Zwillinger, CRC Press Inc., 1996, [2.4] and
          [2.5.1].</p>
        </description>
	<discussion>
	  <p>The <el>transpose</el> element is the operator for constructing the transpose
	  of a matrix.</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4111.gif" alt="A^{\mathrm{T}}"/>
	</rendering>
	<optype>unary function</optype>
        <signature>(vector)->vector(type=row)</signature>
        <signature>(matrix)->matrix</signature>
        <signature>(vector[type=row])->vector</signature>
        <property>
          <description>
            <p>transpose(transpose(A))= A</p>
          </description>
        </property>
        <property>
          <description>
            <p>transpose(transpose(V))= V</p>
          </description>
        </property>
        <MMLexample>
	  <![CDATA[<apply><transpose/><ci type="matrix">A</ci></apply>]]>
	</MMLexample>
	  
	<MMLexample><![CDATA[<apply><transpose/><ci type="vector">V</ci></apply>]]></MMLexample>
      </MMLdefinition>
      <MMLdefinition id="cds_selector" cdrole="application" arity="2">
        <name>selector</name>
        <description>
          <p>The operator used to extract sub-objects from vectors, matrices matrix rows
          and lists.  Elements are accessed by providing one index element for each
          dimension.  For matrices, sub-matrices are selected by providing one fewer index
          items.  For a matrix A and a column vector V : select(i, j, A) is the i,j th
          element of A.  select(i, A) is the matrixrow formed from the i'th row of A.
          select(i, V) is the i'th element of V.  select(V) is the sequence of all
          elements of V.  select(A) is the sequence of all elements of A, extracted row by
          row.  select(i, L) is the i'th element of a list.  select(L) is the sequence of
          elements of a list.</p>
        </description>
	<discussion>
	  <p>The <el>selector</el> element is the operator for indexing into vectors
	  matrices and lists. It accepts one or more arguments. The first argument
	  identifies the vector, matrix or list from which the selection is taking place,
	  and the second and subsequent arguments, if any, indicate the kind of selection
	  taking place.</p>

	  <p>When <el>selector</el> is used with a single argument, it should be
	  interpreted as giving the sequence of all elements in the list, vector or matrix
	  given. The ordering of elements in the sequence for a matrix is understood to be
	  first by column, then by row. That is, for a matrix (
	  <var>a</var><sub><var>i</var>,<var>j</var></sub>), where the indices denote row
	  and column, the ordering would be <var>a</var> <sub>1,1</sub>, <var>a</var>
	  <sub>1,2</sub>, ...  <var>a</var> <sub>2,1</sub>, <var>a</var><sub>2,2</sub>
	  ... etc.</p>

	  <p>When three arguments are given, the last one is ignored for a list or vector,
	  and in the case of a matrix, the second and third arguments specify the row and
	  column of the selected element.</p>

	  <p>When two arguments are given, and the first is a vector or list, the second
	  argument specifies an element in the list or vector. When a matrix and only one
	  index <var>i</var> is specified as in</p>
	  <MMLexample><![CDATA[<apply>
  <selector/>
  <matrix>
    <matrixrow><cn>1</cn><cn>2</cn></matrixrow>
    <matrixrow><cn>3</cn><cn>4</cn></matrixrow>
  </matrix>
  <cn>1</cn>
</apply>]]></MMLexample> 
	  <p>it refers to the <var>i</var>-th matrixrow. Thus, the preceding example
	  selects the following row:</p>
	  <MMLexample><![CDATA[<matrixrow> <cn> 1 </cn> <cn> 2 </cn> </matrixrow>]]></MMLexample>
	  <p>
	    <el>selector</el> is classified as an n-ary linear algebra operator even
	  though it can take only one, two, or three arguments.</p>
	</discussion>
	<classification>function</classification>
	<rendering>
	  <p>The <el>selector</el> construct renders in a manner that indicates which
	  sub-element of the parent object is selected.  For vectors and matrices this is
	  normally done by specifying the parent object together with subscripted indices.
	  For example, the selection</p>
	  <MMLexample><![CDATA[<apply>
  <selector/>
  <ci type="vector">V</ci>
  <cn> 1 </cn>
</apply>]]></MMLexample> 
	  <p>would have a default rendering of
	  <graphic role="display" source="image/selector.gif" alt="V_1"/>
	  </p>
	  <p>Selecting the (1,2) element of a 2 by 2 matrix would have a default rendering as
	  <graphic role="display" source="image/selector2.gif" 
		   alt="{\left[\begin{array}{cc}1&amp;2\\3&amp;4\end{array}\right]}_{1,2}"/>
	  </p>
	</rendering>
	<signature>(matrix,scalar,scalar)->scalar</signature>
	<signature>(matrix,scalar)->matrixrow</signature>
	<signature>(matrix)->scalar* </signature>
        <signature>((vector|list|matrixrow),scalar )->scalar</signature>
        <signature>(vector|list|matrixrow)->scalar*</signature>
        <property>
          <description>
            <p>For all vectors V, V = vector(selector(V))</p>
          </description>
        </property>
        <property>
          <description>
            <p>For all matrix rows Mrow, Mrow = matrixrow(selector(Mrow))</p>
          </description>
        </property>
        <MMLexample>&lt;apply&gt;<![CDATA[<selector/><ci type="matrix">M</ci><cn>3</cn><cn>2</cn>]]>&lt;/apply&gt;</MMLexample>
      </MMLdefinition>
      
      <MMLdefinition id="cds_vectorproduct"  cdrole="application" arity="2">
        <name>vectorproduct</name>
        <description>
          <p>The vector or cross product of two nonzero three-dimensional vectors
v1 and v2 is defined by</p>
          <p>v1 x v2  =  n  norm(v1) * norm(v2) sin(theta)
where n is the unit normal vector perpendicular to both, adhering to
the right hand rule.
CRC Standard Mathematical Tables and Formulae, 
editor: Dan Zwillinger, CRC Press Inc., 1996, [2.4]
</p>
        </description>
	<discussion>
	  <p>The <el>vectorproduct</el> is the operator element for
	  deriving the vector product of two vectors.</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4113.gif"
		   alt="A \times B = a b \sin\theta N"/>
	</rendering>
	<optype>binary vector operator</optype>
	<signature>(vector,vector)->vector</signature>
        <property>
          <description>
            <p>if v1 and v2 are parallel then their vector product is 0</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><vectorproduct/><ci>u</ci><ci>v</ci></apply>]]></MMLexample>
		<MMLexample>
		<description><p>where <var>A</var> and <var>B</var> are vectors, <var>N</var> is a unit vector orthogonal to <var>A</var> and <var>B</var>, <var>a</var>, <var>b</var> are the magnitudes of
A, B and <graphic role="inline" source="image/f4112.gif" alt="\theta"/>is the angle between A and B.</p>
        </description>
		<![CDATA[
		<apply>
		  <eq/>
		  <apply><vectorproduct/>
		    <ci type="vector"> A </ci>
		    <ci type="vector"> B </ci>
		  </apply>
		  <apply><times/>
		    <ci> a </ci>
		    <ci> b </ci>
		    <apply><sin/>
		      <ci> &theta; </ci>
		    </apply>
		    <ci type="vector"> N </ci>
		  </apply>
		</apply>
		]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_scalarproduct"  cdrole="application" arity="nary">
        <name>scalarproduct</name>
        <description>
          <p>This symbol represents the scalar product function. It takes two vector
          arguments and returns a scalar value. The scalar product of two vectors a, b is
          defined as |a| * |b| * cos(\theta), where \theta is the angle between the two
          vectors and |.| is a euclidean size function. Note that the scalar product is
          often referred to as the dot product. </p>
	</description>
	<discussion>
	  <p>The <el>scalarproduct</el> is the operator element for deriving the scalar
	  product of two vectors.</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4114.gif" alt="A.B = ab\cos\theta"/>
	</rendering>
	<optype>binary vector operator</optype>
        <signature>(vector,vector) -> scalar</signature>
        <property>
          <description>
            <p>if the scalar product of two vectors is 0 then they are orthogonal.</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><scalarproduct/><ci>u</ci><ci>v</ci></apply>]]></MMLexample>
		<MMLexample>
		<description>
        <p>where A and B are vectors, <var>a</var>, <var>b</var> are the magnitudes of A, B and <graphic role="inline" source="image/f4112.gif" alt="\theta"/>is the angle between A and B.</p>
        </description>
	<![CDATA[<apply>
  <eq/>
  <apply><scalarproduct/>
    <ci type="vector"> A </ci>
    <ci type="vector">B </ci>
  </apply>
  <apply><times/>
    <ci> a </ci>
    <ci> b </ci>
    <apply><cos/>
      <ci> &theta; </ci>
    </apply>
  </apply>
</apply>]]></MMLexample>
      </MMLdefinition>
	  
      <MMLdefinition id="cds_outerproduct" cdrole="application" arity="2">
        <name>outerproduct</name>
        <description>
          <p>This symbol represents the outer product function. It takes two vector
          arguments and returns a matrix. It is defined as follows: if we write the
          {i,j}'th element of the matrix to be returned as m_{i,j}, then: m_{i,j}=a_i *
          b_j where a_i,b_j are the i'th and j'th elements of a, b respectively. </p>
        </description>
	<discussion>
	  <p>The <el>outerproduct</el> is the operator element for deriving the outer
	  product of two vectors.</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <p>
	    <graphic role="inline" source="image/tensor.gif" alt="A \otimes B"/>
	    or
	    <graphic role="inline" source="image/wedge.gif" alt="A \wedge B"/>
	  </p>
	</rendering>
	<optype>binary vector operator</optype>
        <signature>(vector,vector) -> matrix</signature>
        <MMLexample><![CDATA[<apply><outerproduct/><ci>u</ci><ci>v</ci></apply>]]></MMLexample>
	<MMLexample>
	  <description><p>where A and B are vectors.</p></description>
	  <![CDATA[<apply>
  <outerproduct/>
  <ci type="vector">A</ci>
  <ci type="vector">B</ci>
</apply>]]></MMLexample>
      </MMLdefinition>
    </mcd>

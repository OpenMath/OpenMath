<?xml version="1.0" encoding="utf-8"?>
<mcd>
      <MMLdefinition id="cds_inverse"  cdrole="application" arity="1">
	<title>Inverse Function</title>
        <name>inverse</name>
        <description>
          <p>This MathML element is applied to a function in order to construct a new
          function that is to be interpreted as the inverse function of the original
          function.  For a particular function F, inverse(F) composed with F behaves like
          the identity map on the domain of F and F composed with inverse(F) should be an
          identity function on a suitably restricted subset of the Range of F.  The MathML
          definitionURL attribute should be used to resolve notational ambiguities, or to
          restrict the inverse to a particular domain or to make it one-sided. </p>
        </description>
	<discussion>
	  <p>The <el>inverse</el> element is applied to a function in order to construct a
	  generic expression nfor the functional inverse of that function. As with other
	  MathML functions, <el>inverse</el> may either be applied to arguments, or it may
	  appear alone, in which case it represents an abstract inversion operator acting
	  on other functions.</p>
	  <p>A typical use of the <el>inverse</el> element is in an HTML document
	  discussing a number of alternative definitions for a particular function so that
	  there is a need to write and define <var>f</var><sup>(-1)</sup>(x). To associate
	  a particular definition with <var>f</var><sup>(-1)</sup>, use the
	  <att>definitionURL</att> and <att>encoding</att> attributes.</p>

    <p>Given functions, it is natural to have functional inverses. This is handled by the
    <el>inverse</el> element.</p>
    <p>Functional inverses can be problematic from a mathematical point of view in that
    they implicitly involve the definition of an inverse for an arbitrary function
    <var>F</var>. Even at the K-through-12 level the concept of an inverse <var>F</var>
    <sup>-1</sup> of many common functions <var>F</var> is not used in a uniform way. For
    example, the definitions used for the inverse trigonometric functions may differ
    slightly depending on the choice of domain and/or branch cuts.</p>
    <p>MathML adopts the view: if <var>F</var> is a function from a domain <var>D</var> to
    <var>D</var>&apos;, then the inverse <var>G</var> of <var>F</var> is a function over
    <var>D</var>&apos; such that <var>G</var>(<var>F</var>(<var>x</var>)) = <var>x</var>
    for <var>x</var> in <var>D</var>. This definition does not assert that such an inverse
    exists for all or indeed any <var>x</var> in <var>D</var>, or that it is single-valued
    anywhere. Also, depending on the functions involved, additional properties such as
    <var>F</var>(<var>G</var>(<var>y</var>)) = <var>y</var> for <var>y</var> in
    <var>D</var>&apos; may hold.</p>
    
    <p>The <el>inverse</el> element is applied to a function whenever an inverse is
    required. For example, application of the inverse sine function to <var>x</var>,
    i.e. sin<sup>-1</sup> (<var>x</var>), is encoded as: <eg role = "mathml"><![CDATA[
    <apply> <apply> <inverse/> <sin/> </apply> <ci> x </ci> </apply> ]]></eg>While
    <el>arcsin</el> is one of the predefined MathML functions, an explicit reference to
    sin<sup>-1</sup>(<var>x</var>) might occur in a document discussing possible
    definitions of <el>arcsin</el>.</p>
	</discussion>

        <classification>operator</classification>

	<rendering>
	  <p>The default rendering for a functional inverse makes use of a parenthesized
	  exponent as in <var>f</var><sup>(-1)</sup>(<var>x</var>).</p>
	</rendering>

        <signature> (function) -> function </signature>
        <signature> [definitionURL=URI](function) -> function(definition) </signature>
        <property>
          <description>
            <p>ForAll( y, such y in domain( f^(-1) ), f( f^(-1)(y) ) = y </p>
          </description><![CDATA[
<apply><forall/>
  <bvar><ci>y</ci></bvar>
  <bvar><ci type="function">f</ci></bvar>
  <condition>
    <apply><in/>
      <ci>y</ci>
      <apply><csymbol definitionURL="domain"><mtext>Domain</mtext></csymbol>
        <apply><inverse/><ci type="function">f</ci></apply>
      </apply>
    </apply>
  </condition>
  <apply><eq/>
    <apply><ci type="function">f</ci>
      <apply><apply><inverse/><ci type="function">f</ci></apply>
        <ci>y</ci>
      </apply>
    </apply>
    <ci>y</ci>
  </apply>
</apply>
]]></property>
        <MMLexample><![CDATA[<apply><inverse/>
  <sin/>
</apply>]]></MMLexample>

        <MMLexample><![CDATA[<apply><inverse definitionURL="www.example.com/MathML/Content/arcsin"/>
  <sin/>
</apply>]]></MMLexample>

<MMLexample><![CDATA[<apply>
  <apply><inverse/>
    <ci type="matrix"> a </ci>
  </apply>
  <ci> A </ci>
</apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_lambda"  cdrole="binder">
	<title>Lambda</title>
        <name>lambda</name>
        <description>
          <p>This is the operation of lambda calculus that constructs a function from an
          expression and a variable.  Lambda is an n-ary function, where all but an
          optional domain of application and the last argument are bound variables and the
          last argument is an expression possibly involving those variables.  The lambda
          function can be viewed as the inverse of function application.
	  </p>

	  <p>For example, Lambda( x, F ) is written as \lambda x [F] in the lambda
	  calculus literature.  The expression F may contain x but the full lambda
	  expression is regarded to be free of x.  A computational application receiving a
	  MathML lambda expression should not evaluate x or test for x.  Such an
	  application may apply the lambda expression as a function to arguments in which
	  case any result that is computed is computed through parameter substitutions
	  into F.</p>
          <p>
	    Note that a lambda expression on an arbitrary function applied to a the bound
	    variable is equivalent to that arbitrary function.  A domain of application
	    can be used to restrict the defined function to a specific domain.</p>
        </description>
	<discussion>
	  <p>The <el>lambda</el> element is used to construct a user-defined function from
	  an expression, bound variables, and qualifiers. In a lambda construct with
	  <var>n</var> (possibly 0) bound variables, the first <var>n</var> children are
	  <el>bvar</el> elements that identify the variables that are used as placeholders
	  in the last child for actual parameter values. The bound variables can be
	  restricted by an optional <el>domainofapplication</el> qualifier or one of its
	  shorthand notations. The meaning of the <el>lambda</el> construct is an
	  <var>n</var>-ary function that returns the expression in the last child where
	  the bound variables are replaced with the respective arguments.</p>

	<p>The <el>lambda</el> element is used to construct a user-defined function from
	an expression.  The last child is an expression defining the function in terms of
	the bound variables declared by the <el>bvar</el> and any
	<el>domainofapplication</el> (see <specref ref="contm_qualifiers"/>) elements
	coming before it.  The last element is typically an <el>apply</el> element, but
	can also be any container element. The following constructs
	<graphic role = "inline" source = "image/f4002.gif" alt = "\lambda"/>
	(<var>x</var>, sin <var>x</var>)

<eg role = "mathml"><![CDATA[<lambda>
  <bvar><ci>x</ci></bvar>
  <apply><sin/><ci>x</ci></apply>
</lambda>]]></eg>

      The following constructs the constant function <graphic role="inline"
      source="image/f4002.gif" alt="\lambda"/>(<var>x</var>, 3)

<eg role = "mathml"><![CDATA[<lambda><bvar><ci> x </ci></bvar><cn>3</cn></lambda>]]></eg></p>

    <p>The lambda calculus allows a user to construct a function from a variable and an
    expression. For example, the lambda construct underlies the common mathematical idiom
    illustrated here: <eg role = "text">Let <var>f</var> be the function taking
    <var>x</var> to <var>x</var><sup>2</sup> + 2</eg></p>

    <p>There are various notations for this concept in mathematical literature, such as
    <graphic role="inline" source="image/f4002.gif" alt="\lambda"/>(<var>x</var>,
    <var>F</var>(<var>x</var>)) = <var>F</var> or <graphic role="inline"
    source="image/f4002.gif" alt="\lambda"/>(<var>x</var>, [<var>F</var>]) =<var>F</var>,
    where <var>x</var> is a free variable in <var>F</var>.</p>

    <p>This concept is implemented in MathML with the <el>lambda</el> element. A lambda
    construct with <var>n</var> (possibly 0) internal variables is encoded by a
    <el>lambda</el> element, where the first <var>n</var> children are <el>bvar</el>
    elements containing the identifiers of the internal variables. This is followed by an
    optional <el>domainofapplication</el> qualifier (see <specref
    ref="contm_qualifiers"/>) and an expression defining the function. The defining
    expression is typically an <el>apply</el>, but can also be any expression.</p>

    <p>The following constructs
    <graphic role = "inline" source = "image/f4002.gif" alt = "\lambda"/>
(<var>x</var>, sin(<var>x</var>+1)):

<eg role = "mathml"><![CDATA[<lambda>
  <bvar><ci> x </ci></bvar>
  <apply>
    <sin/>
    <apply>
      <plus/>
      <ci> x </ci>
      <cn> 1 </cn>
    </apply>
  </apply>
</lambda>]]></eg></p>

<p>To use <el>declare</el> and <el>lambda</el> to construct the function <var>f</var> for
which <var>f</var>( <var>x</var>) = <var>x</var><sup>2</sup> + <var>x</var> + 3 use:

<eg role = "mathml"><![CDATA[
<declare type="function">
  <ci> f </ci>
  <lambda>
    <bvar><ci> x </ci></bvar>
    <apply>
      <plus/>
      <apply>
        <power/>
        <ci> x </ci>
        <cn> 2 </cn>
      </apply>
      <ci> x </ci>
      <cn> 3 </cn>
    </apply>
  </lambda>
</declare>]]></eg>

The following markup declares and constructs the function <var>J</var> such that
<var>J</var>(<var>x</var>, <var>y</var>) is the integral from <var>x</var> to <var>y</var>
of <var>t</var><sup>4</sup> with respect to <var>t</var>.

<eg role = "mathml"><![CDATA[<declare type="function">
  <ci> J </ci>
  <lambda>
    <bvar><ci> x </ci></bvar>
    <bvar><ci> y </ci></bvar>
    <apply> <int/>
      <bvar><ci> t </ci></bvar>
      <lowlimit><ci> x </ci></lowlimit>
      <uplimit><ci> y </ci></uplimit>
      <apply>
        <power/>
        <ci>t</ci>
        <cn>4</cn>
      </apply>
    </apply>
  </lambda>
</declare>]]></eg>

The function <var>J</var> can then in turn be applied to an argument pair.</p>

	</discussion>
        <classification>constructor</classification>
	<rendering><ulist>
	  <item><p>
	  <graphic role="inline" source="image/f4019.gif" alt="\lambda(x, \sin x + 1)"/></p></item>
	  
	  <item><p>
	  <graphic role="inline" source="image/f4020.gif" alt="\lambda(b, \int_a^b f(x)\,\diffd x)"/></p></item>
	  
	  <item><p>
	  <graphic source="image/f4020a.gif" role="inline" alt="\lambda(x\colon{\bf I}, \sin x)"/></p></item>
	  
	  <item><p>
	  <graphic source="image/f4020b.gif" role="inline" alt="\sin\bigl|_{\bf I}"/></p></item>
	</ulist>
	</rendering>
	<signature>(bvar*,anything) -> function </signature>
	<signature>(domainofapp,function) -> function </signature>
	<signature>(bvar+,domainofapp,anything) -> function </signature>
	<property>
          <description>
            <p>ForAll( F, lambda(x,F(x)) = F )</p>
          </description><![CDATA[
<apply><forall/>
  <bvar><ci>F</ci></bvar>
  <apply><eq/>
    <lambda>
      <bvar><ci>x</ci></bvar>
      <apply><ci>F</ci><ci>x</ci></apply>
    </lambda>
    <ci>F</ci>
  </apply>
</apply>
]]></property>

<MMLexample>
<description><p>a simple lambda construct.</p></description>
<![CDATA[<lambda>
  <bvar><ci> x </ci></bvar>
  <apply><sin/>
    <apply>
      <plus/>
      <ci> x </ci>
      <cn> 1 </cn>
    </apply>
  </apply>
</lambda>]]></MMLexample>
<MMLexample>
<description><p>The next example constructs a one-argument function in which the argument 
<var>b</var> specifies the upper bound of a specific definite integral.</p>
</description>
<![CDATA[
<lambda>
  <bvar><ci> b </ci></bvar>
  <apply>
    <int/>
    <bvar><ci> x </ci></bvar>
    <lowlimit><ci> a </ci></lowlimit>
    <uplimit><ci> b </ci></uplimit>
    <apply>
       <fn><ci> f </ci></fn>
       <ci> x </ci>
    </apply>
  </apply>
</lambda>]]></MMLexample>
<MMLexample>
<description><p>The <el>domainofapplication</el> child restricts the possible
values of the arguments of the constructed function. For instance, the
following two <el>lambda</el> constructs are representations of a function on
the integers.
</p></description>
<![CDATA[<lambda>
  <bvar><ci> x </ci></bvar>
  <domainofapplication><integers/></domainofapplication>
  <apply><sin/><ci> x </ci></apply>
</lambda>]]></MMLexample>
<MMLexample>
<description>
<p>If a <el>lambda</el> construct does not contain bound variables, then the
  arity of the constructed function is unchanged, and the <el>lambda</el>
  construct is redundant, unless it also contains a
  <el>domainofapplication</el> construct that restricts existing functional
  arguments, as in this example, which is a variant representation for the
  function above. In particular, if the last child of a <el>lambda</el> construct is not a
function, say a number, then the <el>lambda</el> construct will not be a
function, but the same number. Of course, in this case a
  <el>domainofapplication</el> does not make sense</p>
</description>
<![CDATA[<lambda>
  <domainofapplication><integers/></domainofapplication>
  <sin/>
</lambda>]]>
</MMLexample>

      </MMLdefinition>


      <MMLdefinition id="cds_compose"  cdrole="application" arity="nary">
	<title>Function Composition</title>
        <name>compose</name>
        <description>
          <p>This is the MathML constructor for composing functions.  In order for a
          composition to be meaningful, the range of the first function should be the
          domain of the second function, etc.  .  However, since no evaluation takes place
          in MathML, such a construct can safely be used to make statements such as that f
          composed with g is undefined.</p>
	  <p>
	    The result is a new function whose domain is the domain of the first function
	    and whose range is the range of the last function and whose definition is
	    equivalent to applying each function to the previous outcome in turn as
	    in:</p>
          <p>
    <!-- should be  &compfn; = "&#x02218;" -->
            (f @ g )( x )   ==  f( g(x) ).</p>
          <p>
	  This function is often denoted by a small circle infix operator.</p>
        </description>
	<discussion>

<p>The <el>compose</el> element represents the function
composition operator. Note that MathML makes no assumption about the domain
and codomain of the constituent functions in a composition; the domain of the
resulting composition may be empty.</p>
<p>The <el>compose</el> element is an <emph>n-ary operator</emph>.  As an n-ary
operator, therefore it may take qualifiers.
</p>
	</discussion>
        <classification>function</classification>
<rendering><ulist>
<item><p>
<graphic role="inline" source="image/f4021.gif" alt="f \circ g"/></p></item>

<item><p>
<graphic role="inline" source="image/f4022.gif" alt="f \circ g \circ h"/></p></item>

<item><p>
<graphic role="inline" source="image/f4023.gif" alt="(f \circ g) (x)"/></p></item>

<item><p>
<graphic role="inline" source="image/f4024.gif" alt="f(g(x))"/></p></item>
</ulist>
</rendering>
        <signature> (function*) -> function </signature>
        <property>
          <description>
            <p>ForAll( x, (f@g)(x) = f(g(x) )</p>
          </description><![CDATA[
<apply><forall/>
  <bvar><ci>x</ci></bvar><bvar><ci>f</ci></bvar><bvar><ci>g</ci></bvar>   
  <apply><eq/>
    <apply><apply><compose/><ci>f</ci><ci>g</ci></apply>
      <ci>x</ci>
    </apply>
    <apply><ci>f</ci><apply><ci>g</ci><ci>x</ci></apply></apply>
  </apply>
</apply>]]></property>

        <MMLexample>
          <description>
            <p>The use of fn is deprecated.  Use type="function" instead.</p>
          </description><![CDATA[<apply><compose/>
  <ci type="function"> f </ci>
  <ci type="function"> g </ci>
  <sin/>
</apply>]]></MMLexample>

<MMLexample><![CDATA[<apply>
  <compose/>
  <ci type="function"> f </ci>
  <ci type="function"> g </ci>
  <ci type="function"> h </ci>
</apply>]]></MMLexample>
<MMLexample><![CDATA[<apply>
  <apply><compose/>
    <fn><ci> f </ci></fn>
    <fn><ci> g </ci></fn>
  </apply>
  <ci> x </ci>
</apply>]]></MMLexample>

<MMLexample><![CDATA[<apply>
  <fn><ci> f </ci></fn>
  <apply>
    <fn><ci> g </ci></fn>
    <ci> x </ci>
  </apply>
</apply>]]></MMLexample>
      </MMLdefinition>

<MMLdefinition id="cds_ident"  cdrole="application" arity="1">
  <title>Identity function</title>	
  <name>ident</name>
  <description>
    <p>The ident element represents the identity function.  MathML makes no assumption
    about the function space in which the identity function resides.  Proper
    interpretation of the domain (and hence codomain) of the identity function depends on
    the context in which it is used.
    </p>
  </description>
  <classification>constructor</classification>
  <rendering>
    <graphic role="inline" source="image/f4025.gif" alt="f \circ f^{-1} =\mathrm{id}"/>
  </rendering>
  
        <signature> function </signature>

        <property>
          <description><p>ForAll( x, ident(x) = x )</p></description>
	  <![CDATA[
<apply><forall/>
  <bvar><ci>x</ci></bvar>
  <apply><eq/>
    <apply><ident/><ci>x</ci></apply>
    <ci>x</ci>
  </apply>
</apply>
]]></property>

<MMLexample>
<![CDATA[
<apply>
  <eq/>
  <apply><compose/>
    <fn><ci> f </ci></fn>
    <apply><inverse/>
      <fn><ci> f </ci></fn>
    </apply>
  </apply>
  <ident/>
</apply>
]]></MMLexample>

<MMLexample><![CDATA[<apply><eq/>
  <apply><compose/>
    <ci type="function"> f </ci>
    <apply><inverse/><ci type="function"> f </ci></apply>
  </apply>
  <ident/>
</apply>
]]></MMLexample>
</MMLdefinition>

      <MMLdefinition id="cds_domain"  cdrole="application" arity="1">
	<title>Domain</title>
        <name>domain</name>
        <description>
          <p>The domain element denotes the domain of a given function, which is the 
set of values over which it is defined. 
</p>
        </description>
	<discussion>
	  <p>The <el>domain</el> element denotes the domain of a given function, which is
	  the set of values over which it is defined. </p> </discussion>
	  <classification>function</classification>
<rendering><p>
<graphic role="inline" source="image/new-domain.gif" alt="\mbox{domain}(f) = \mathbb{R}"/></p>
</rendering>
        <signature>(function) -> set </signature>
<MMLexample>
<description><p>If <var>f</var> is a function from the reals to the rationals, then:</p></description>
<![CDATA[<apply>
  <eq/>
  <apply><domain/>
    <fn><ci> f </ci></fn>
  </apply>
  <reals/>
</apply>
]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_codomain"  cdrole="application" arity="1">
	<title>Codomain/Range</title>
        <name>codomain</name>
        <description>
          <p>The codomain (range) element denotes the codomain of a given function, which
          is a set containing all values taken by the function.  The codomain may contain
          additional points which are not realized by applying the the function to
          elements of the domain.</p>
        </description>
<discussion>

<p>The <el>codomain</el> element denotes the codomain of a given function, which is a set 
containing all values taken by the function. It is not necessarily the case that every point in
the codomain is generated by the function applied to some point of the domain. (For example I may know
that a function is integer-valued, so its codomain is the integers, without knowing (or stating) which
subset of the integers is mapped to by the function.)</p>
<p>Codomain is sometimes also called Range.</p>
</discussion>
        <classification>function</classification>
<rendering><p>
<graphic role="inline" source="image/new-codomain.gif" alt="\mbox{codomain} (f) = \mathbb{Q}"/></p>
</rendering>
        <signature>(function) -> set </signature>
        <property>
          <description>
            <p>ForAll( y, Exists(x,y =f(x)), member(y,codomain(f)) )</p>
          </description>
        </property>
        <MMLexample>
	  <description>
	  <p>If <var>f</var> is a function from the reals to the rationals, then:</p>
	  </description>
<![CDATA[
<apply>
  <eq/>
  <apply><codomain/>
    <fn><ci> f </ci></fn>
  </apply>
  <rationals/>
</apply>
]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_image"  cdrole="application" arity="1">
	<title>Image</title>
        <name>image</name>
        <description>
          <p>The image element denotes the image of a given function, which is the set of
          values taken by the function. Every point in the image is generated by the
          function applied to some point of the domain.</p>
        </description>
	<discussion>
	  <p>The <el>image</el> element denotes the image of a given function, which is
	  the set of values taken by the function. Every point in the image is generated
	  by the function applied to some point of the domain.</p>
	</discussion>
	<classification>function</classification>
	<rendering><p>
	  <graphic role="inline" source="image/new-image.gif"
		   alt="\mbox{image}(\sin) = [-1 , 1]"/></p>
	</rendering>
        <signature>(function) -> set </signature>
        <property>
          <description>
            <p>ForAll( x, x in image(f), ThereExists(y,f(y)=x) )</p></description></property>
        <MMLexample>
	  <description>
	    <p>The real <el>sin</el> function is a function from the reals to the reals, 
	    taking values between -1 and 1.</p>
	  </description>
<![CDATA[<apply><eq/>
  <apply><image/><sin/></apply>
  <interval><cn>-1</cn><cn> 1</cn></interval>
</apply>]]></MMLexample>

<MMLexample><![CDATA[<apply><forall/>
  <bvar><ci>x</ci></bvar>
  <condition>
    <apply><in/>
      <ci>x</ci>
      <apply><image/><ci>f</ci></apply>
    </apply>
  </condition>
  <apply><in/>
    <ci>x</ci>
    <apply><codomain/><ci>f</ci></apply>
  </apply>
</apply>]]></MMLexample>
      </MMLdefinition>

</mcd>
